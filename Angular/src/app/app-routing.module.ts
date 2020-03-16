import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
// import { CarrinhoComponent } from './components/carrinho/carrinho.component';





const routes: Routes = [
    { 
    path: '', 
    component: FormularioComponent
    },
    {
    path: 'checkout',
    component: FormularioComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


