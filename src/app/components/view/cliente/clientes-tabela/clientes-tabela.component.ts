import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/components/service/produto.service';

@Component({
  selector: 'app-clientes-tabela',
  templateUrl: './clientes-tabela.component.html',
  styleUrls: ['./clientes-tabela.component.css'],
})
export class ClientesTabelaComponent implements OnInit {
  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    sessionStorage.setItem('componenteAtual', 'Produtos');
  }
}
