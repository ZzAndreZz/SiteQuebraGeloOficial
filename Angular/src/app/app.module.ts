import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ResumoCompraComponent } from './components/resumo-compra/resumo-compra.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
// import { CarrinhoComponent } from './components/carrinho/carrinho.component';
// import { PagamentoComponent } from './components/checkout/pagamento/pagamento.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    // ResumoCompraComponent,
    FormularioComponent,
    // CarrinhoComponent,
    // PagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
