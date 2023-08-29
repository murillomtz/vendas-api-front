import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/components/model/cliente.model';
import { ClienteService } from 'src/app/components/service/cliente.service';
import { LocalidadeService } from 'src/app/components/service/localidade.service';

@Component({
  selector: 'app-upgrad-cliente',
  templateUrl: './upgrad-cliente.component.html',
  styleUrls: ['./upgrad-cliente.component.css'],
})
export class UpgradClienteComponent implements OnInit {
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
  id_cliente: any;

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private localidadesService: LocalidadeService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    sessionStorage.setItem('componenteAtual', 'Alterar Cliente');

    this.id_cliente = this.route.snapshot.paramMap.get('id');
    this.service.findByid(this.id_cliente).subscribe((data: any) => {
      this.cliente.id = data.data.id;
      this.cliente.nome = data.data.nome;
      this.cliente.email = data.data.email;
      this.cliente.senha = data.data.senha;
      this.cliente.sobrenome = data.data.sobrenome;
      this.cliente.sexo = data.data.sexo;

      this.cliente.dataNascimento =
        this.datePipe.transform(data.data.dataNascimento, 'yyyy-MM-dd') ?? '';

      this.cliente.nacionalidade = data.data.nacionalidade;
      this.cliente.endereco = data.data.endereco;
      this.cliente.cidade = data.data.cidade;
      this.cliente.estado = data.data.estado;
      this.cliente.telefone = data.data.telefone;

      console.log('#################### 0,' + data.data);
      console.log('#################### 1,' + JSON.stringify(this.cliente));
    });

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
    });

    var estadoMap = this.estados.find(estado => estado.sigla == this.cliente.estado);
    this.localidadesService
    .getCidadesPorEstado(estadoMap?.id)
    .subscribe((cidades) => {
      this.cidades = cidades;
      console.log(this.cliente.estado,'##########cidades########## 1,' + this.cidades);
    });
  }

  create(): void {
    this.cliente.endereco =
      this.endereco.endereco +
      ' Bairro ' +
      this.endereco.bairro +
      ', ' +
      this.endereco.tipo +
      ' Nº' +
      this.endereco.numero;

    console.log(this.cliente);
    this.service.create(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(['clientes/tabela']);
      },
      (err) => {
        // this.service.mensagem('Erro ao criar novo livro. Tente mais tarde!')
        console.log(err);
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
      });
  }
}
