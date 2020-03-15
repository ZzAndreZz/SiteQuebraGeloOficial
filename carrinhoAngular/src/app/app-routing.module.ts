import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';





const routes: Routes = [
    { 
    path: '', 
    component: CarrinhoComponent
    },
    {
    path: 'checkout',
    component: CheckoutComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


