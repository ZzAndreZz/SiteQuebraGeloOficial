import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { NavComponent } from './components/nav/nav.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutoSozinhoComponent } from './components/produto-sozinho/produto-sozinho.component';
import { LoginComponent } from './components/login/login.component';
import { FormsComponent } from './components/forms/forms.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsProdutosComponent } from './components/cards-produtos/cards-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { ResumoCompraComponent } from './components/resumo-compra/resumo-compra.component';
import { ItemsComponent } from './components/items/items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeProdutosComponent,
    CategoriasComponent,
    NavComponent,
    ProdutosComponent,
    FooterComponent,
    ProdutoSozinhoComponent,
    LoginComponent,
    FormsComponent,
    CarouselComponent,
    CardsProdutosComponent,
    HomeComponent,
    SobreNosComponent,
    ResumoCompraComponent,
    ItemsComponent,
    CheckoutComponent,
    CadastroComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
