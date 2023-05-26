import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home/home.component';
import { ProdutosComponent } from './components/view/produto/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './components/view/produto/produto-detalhes/produto-detalhes.component';
import { CriarProdutoComponent } from './components/view/produto/criar-produto/criar-produto.component';
import { UpdateProdutoComponent } from './components/view/produto/update-produto/update-produto.component';
import { ProdutosTabelaComponent } from './components/view/produto/produtos-tabela/produtos-tabela.component';
import { ClientesTabelaComponent } from './components/view/cliente/clientes-tabela/clientes-tabela.component';
import { CriarClienteComponent } from './components/view/cliente/criar-cliente/criar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
  },
  {
    path: 'produtos/page/:page',
    component: ProdutosComponent,
  },
  {
    path: 'produtos/tabela',
    component: ProdutosTabelaComponent,
  },
  {
    path: 'produtos/tabela/page/:page',
    component: ProdutosTabelaComponent,
  },
  {
    path: 'produtos/novoProduto',
    component: CriarProdutoComponent,
  },
  {
    path: 'produtos/:id',
    component: ProdutoDetalhesComponent,
  },
  {
    path: 'produtos/alteracao/:id',
    component: UpdateProdutoComponent,
  },
  {
    path: 'clientes/tabela/page/:page',
    component: ClientesTabelaComponent,
  },
  {
    path: 'clientes/tabela',
    component: ClientesTabelaComponent,
  },
  {
    path: 'clientes/novoCliente',
    component: CriarClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
