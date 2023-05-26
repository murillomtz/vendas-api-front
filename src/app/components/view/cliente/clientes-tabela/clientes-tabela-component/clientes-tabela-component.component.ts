import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/components/service/cliente.service';

@Component({
  selector: 'app-clientes-tabela-component',
  templateUrl: './clientes-tabela-component.component.html',
  styleUrls: ['./clientes-tabela-component.component.css']
})
export class ClientesTabelaComponentComponent implements OnInit {

  tabelaDetails: any = {};
  clientes: any = [];
  pageAtual: any;

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pageAtual = Number(this.route.snapshot.paramMap.get('page'));
    this.findAll(0);
  }

  findAll(page: number): void {
    this.service.fingAll(page).subscribe((resposta: any) => {
      this.clientes = resposta.content;
      this.tabelaDetails.numberOfElements = resposta.numberOfElements;
      this.tabelaDetails.size = resposta.size;
      this.tabelaDetails.totalElementes = resposta.totalElementes;
      this.tabelaDetails.totalPages = resposta.totalPages;
      this.tabelaDetails.pageNumber = resposta.pageNumber ?? 0;
      console.log("RESPOSTA" , resposta)
    });
  }

  navegarParaProximaPaginaTabela(page: number): void {
    this.pageAtual = page + 1;
    this.router.navigate([`clientes/tabela/page/${this.pageAtual}`]);
    this.findAll(this.pageAtual);
  }
  navegarParaPaginaAnteriorTabela(page: number): void {
    this.pageAtual = page - 1;
    this.router.navigate([`clientes/tabela/page/${this.pageAtual}`]);
    this.findAll(this.pageAtual);
  }

  navegarParaPaginaTabela(page: number): void {
    this.pageAtual = page;
    this.router.navigate([`clientes/tabela/page/${this.pageAtual}`]);
    this.findAll(this.pageAtual);
  }
  getRange(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index);
  }
}

