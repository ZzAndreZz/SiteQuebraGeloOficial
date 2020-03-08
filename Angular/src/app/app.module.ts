import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    FooterComponent

  ],
  imports: [

    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
