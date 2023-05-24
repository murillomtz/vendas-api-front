import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/view/home/home.component';
import { AbaInformativaComponent } from './components/template/aba-informativa/aba-informativa.component';
import { PainelInformativoComponent } from './components/template/painel-informativo/painel-informativo.component';
import { ProdutosComponent } from './components/view/produto/produtos/produtos.component';
import { ItemLojaComponent } from './components/template/item-loja/item-loja.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoDetalhesComponent } from './components/view/produto/produto-detalhes/produto-detalhes.component';
import { CriarProdutoComponent } from './components/view/produto/criar-produto/criar-produto.component';
import { FormsModule } from '@angular/forms';
import { UpdateProdutoComponent } from './components/view/produto/update-produto/update-produto.component';
import { ProdutosTabelaComponent } from './components/view/produto/produtos-tabela/produtos-tabela.component';
import { ProdutosTabelaComponenteComponent } from './components/view/produto/produtos-tabela/produtos-tabela-componente/produtos-tabela-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AbaInformativaComponent,
    PainelInformativoComponent,
    ProdutosComponent,
    ItemLojaComponent,
    ProdutoDetalhesComponent,
    CriarProdutoComponent,
    UpdateProdutoComponent,
    ProdutosTabelaComponent,
    ProdutosTabelaComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
