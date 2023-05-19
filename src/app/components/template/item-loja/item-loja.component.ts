import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../model/produto.model';
import { ProdutoService } from '../../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-loja',
  templateUrl: './item-loja.component.html',
  styleUrls: ['./item-loja.component.css'],
})
export class ItemLojaComponent implements OnInit {
  produtos: Produto[] = [];
  @Input() produto: any = new Object();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navegarParaProdutosDetalhes(): void {
    this.router.navigate([`produtos/${this.produto.id}`])
  }
}
