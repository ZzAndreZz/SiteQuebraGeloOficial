import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';




const routes: Routes = [
    { 
    path: '', 
    component: ItemsComponent
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


