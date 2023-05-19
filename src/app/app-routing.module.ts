import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home/home.component';
import { ProdutosComponent } from './components/view/produto/produtos/produtos.component';
import { ProdutoDetalhesComponent } from './components/view/produto/produto-detalhes/produto-detalhes.component';
import { CriarProdutoComponent } from './components/view/produto/criar-produto/criar-produto.component';
import { UpdateProdutoComponent } from './components/view/produto/update-produto/update-produto.component';
import { ProdutosTabelaComponent } from './components/view/produto/produtos-tabela/produtos-tabela.component';

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
    component: ProdutosTabelaComponent ,
  },
  {
    path: 'produtos/tabela/page/:page',
    component: ProdutosTabelaComponent ,
  },
  {
    path: 'produtos/novoProduto',
    component: CriarProdutoComponent ,
  },
  {
    path: 'produtos/:id',
    component: ProdutoDetalhesComponent,
  },
  {
    path: 'produtos/alteracao/:id',
    component: UpdateProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
