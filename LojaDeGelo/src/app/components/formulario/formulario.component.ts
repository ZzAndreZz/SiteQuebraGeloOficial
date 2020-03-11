import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
// import { ClientesService } from "./clientes.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // form: FormGroup;

  // clientes: string[] = [];

  // clienteService: ClientesService;

  //  formCadastro;
  constructor() {
    // private formBuilder: FormBuilder
    // this.clienteService = new ClientesService();
  }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   name: [null, Validators.required],
    //   email: [null, [Validators.required, Validators.email]],
    //   endereco: [null, [Validators.required]],
    //   tel: [null, [Validators.call]],
    //   cpf: [null, [Validators.call]],

    // });
  }

  // isFieldValid(field: string) {
  //   return !this.form.get(field).valid && this.form.get(field).touched;
  // }

  // displayFieldCss(field: string) {
  //   return {
  //     'has-error': this.isFieldValid(field),
  //     'has-feedback': this.isFieldValid(field)
  //   };
  // }

  // onSubmit() {
  //   console.log(this.form);
  //   if (this.form.valid) {
  //     console.log('form submitted');
  //   } else {
  //     this.validateAllFormFields(this.form);
  //   }
  // }

  // validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(field => {
  //     console.log(field);
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }

  // reset(){
  //   this.form.reset();
  // }
}
