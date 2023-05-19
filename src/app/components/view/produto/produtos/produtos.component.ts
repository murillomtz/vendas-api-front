import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProdutoService } from '../../../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  tabelaDetails: any = {};
  produtos: any = [];
  pageAtual: any;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var pageROuter = this.route.snapshot.paramMap.get('page');
    this.pageAtual = Number(pageROuter);
    sessionStorage.setItem('componenteAtual', 'Produtos');
    this.fingAllGaleria(0);
  }

  fingAllGaleria(page: number): void {
    this.service.fingAllGaleria(page).subscribe((resposta: any) => {
      this.produtos = resposta.content;
      this.produtos = resposta.content;
      this.tabelaDetails.numberOfElements = resposta.numberOfElements;
      this.tabelaDetails.size = resposta.size;
      this.tabelaDetails.totalElementes = resposta.totalElementes;
      this.tabelaDetails.totalPages = resposta.totalPages;
      this.tabelaDetails.pageNumber = resposta.pageNumber ?? 0;
      console.log('RESPOSTA', this.tabelaDetails);
    });
  }

  navegarParaProximaPaginaTabela(page: number): void {
    this.pageAtual = page + 1;
    this.router.navigate([`produtos/page/${this.pageAtual}`]);
    this.fingAllGaleria(this.pageAtual);
  }
  navegarParaPaginaAnteriorTabela(page: number): void {
    this.pageAtual = page - 1;
    this.router.navigate([`produtos/page/${this.pageAtual}`]);
    this.fingAllGaleria(this.pageAtual);
  }

  navegarParaPaginaTabela(page: number): void {
    this.pageAtual = page;
    this.router.navigate([`produtos/page/${this.pageAtual}`]);
    this.fingAllGaleria(this.pageAtual);
  }

  getRange(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index);
  }
}
