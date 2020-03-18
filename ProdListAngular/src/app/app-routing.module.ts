import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoSozinhoComponent } from './components/produto-sozinho/produto-sozinho.component';


const routes: Routes = [
  {
    path: "",
    component: ProdutosComponent
  },
  {
    path: "produto-sozinho",
    component: ProdutoSozinhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
