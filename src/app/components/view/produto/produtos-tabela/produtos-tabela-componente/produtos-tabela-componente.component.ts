import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/components/service/produto.service';

@Component({
  selector: 'app-produtos-tabela-componente',
  templateUrl: './produtos-tabela-componente.component.html',
  styleUrls: ['./produtos-tabela-componente.component.css']
})
export class ProdutosTabelaComponenteComponent implements OnInit {

  tabelaDetails: any = {};
  produtos: any = [];
  pageAtual: any;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pageAtual = Number(this.route.snapshot.paramMap.get('page'));
    this.findAll(0);
  }

  findAll(page: number): void {
    this.service.fingAll(page).subscribe((resposta: any) => {
      this.produtos = resposta.content;
      this.tabelaDetails.numberOfElements = resposta.numberOfElements;
      this.tabelaDetails.size = resposta.size;
      this.tabelaDetails.totalElementes = resposta.totalElementes;
      this.tabelaDetails.totalPages = resposta.totalPages;
      this.tabelaDetails.pageNumber = resposta.pageNumber ?? 0;
      console.log("RESPOSTA" , resposta.totalPages)
    });
  }

  navegarParaProximaPaginaTabela(page: number): void {
    this.pageAtual = page + 1;
    this.router.navigate([`produtos/tabela/page/${this.pageAtual}`]);
    this.findAll(this.pageAtual);
  }
  navegarParaPaginaAnteriorTabela(page: number): void {
    this.pageAtual = page - 1;
    this.router.navigate([`produtos/tabela/page/${this.pageAtual}`]);
    this.findAll(this.pageAtual);
  }

  navegarParaPaginaTabela(page: number): void {
    this.pageAtual = page;
    this.router.navigate([`produtos/tabela/page/${this.pageAtual}`]);
    this.findAll(this.pageAtual);
  }
  getRange(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index);
  }
}
