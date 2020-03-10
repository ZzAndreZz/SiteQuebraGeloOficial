import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {
    path: "formulario",
    component: FormularioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
