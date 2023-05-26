import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/components/model/cliente.model';
import { ClienteService } from 'src/app/components/service/cliente.service';
import { LocalidadeService } from 'src/app/components/service/localidade.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css'],
})
export class CriarClienteComponent implements OnInit {
  cliente: Cliente = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    sobrenome: '',
    sexo: '',
    dataNascimento: '',
    nacionalidade: '',
    endereco: '',
    cidade: '',
    estado: '',
    telefone: '',
  };

  estados: { id: number; sigla: string }[] = [];
  cidades: any[] = [];
  paises: any[] = [];
  endereco: any = {};

  constructor(
    private service: ClienteService,
    private router: Router,
    private localidadesService: LocalidadeService
  ) {}

  ngOnInit(): void {
    sessionStorage.setItem('componenteAtual', 'Novo Cliente');
    this.localidadesService.getEstados().subscribe((estados: any[]) => {
      this.estados = estados.map((estado) => ({
        id: estado.id,
        sigla: estado.sigla,
      }));
    });

    this.localidadesService.getPaises().subscribe((paises: any) => {
      this.paises = paises.map((pais: any) => {
        return pais.translations.por.common; // Salva apenas o elemento paises.translations.por
      });

      console.log(this.paises);
    });
  }

  create(): void {
    this.cliente.endereco= this.endereco.endereco +' Bairro ' + this.endereco.bairro +', '+ this.endereco.tipo 
    + ' Nº'+ this.endereco.numero ;

    console.log(this.cliente)
    this.service.create(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(['clientes/tabela']);
      },
      (err) => {
        // this.service.mensagem('Erro ao criar novo livro. Tente mais tarde!')
        console.log(err)
      }
    );
  }

  formatarTelefone() {
    const cleanedValue = this.cliente.telefone.replace(/\D/g, '');

    if (cleanedValue.length <= 10) {
      const areaCode = cleanedValue.slice(0, 2);
      const firstPart = cleanedValue.slice(2, 6);
      const secondPart = cleanedValue.slice(6, 10);

      this.cliente.telefone = `(${areaCode}) ${firstPart}-${secondPart}`;
    } else {
      const areaCode = cleanedValue.slice(0, 2);
      const firstPart = cleanedValue.slice(2, 7);
      const secondPart = cleanedValue.slice(7, 11);

      this.cliente.telefone = `(${areaCode}) ${firstPart}-${secondPart}`;
    }
  }

  onChangeEstado(estado: any) {
    console.log('event', estado.value.slice(3, estado.length));
    this.localidadesService
      .getCidadesPorEstado(estado.value.slice(3, estado.length).trim())
      .subscribe((cidades) => {
        this.cidades = cidades;
        console.log(this.cidades);
      });
    console.log(this.cidades);
  }
}
