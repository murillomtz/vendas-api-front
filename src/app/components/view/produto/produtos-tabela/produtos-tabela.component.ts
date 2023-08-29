import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/components/service/produto.service';

@Component({
  selector: 'app-produtos-tabela',
  templateUrl: './produtos-tabela.component.html',
  styleUrls: ['./produtos-tabela.component.css'],
})
export class ProdutosTabelaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    sessionStorage.setItem('componenteAtual', 'Produtos');
  }
}
