import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/components/service/produto.service';

@Component({
  selector: 'app-produtos-tabela',
  templateUrl: './produtos-tabela.component.html',
  styleUrls: ['./produtos-tabela.component.css'],
})
export class ProdutosTabelaComponent implements OnInit {
  tabelaDetails: any = {};
  produtos: any = [];
  pageAtual: any;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pageAtual = Number(this.route.snapshot.paramMap.get('page'));
    sessionStorage.setItem('componenteAtual', 'Produtos');
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

 
}
