import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { Address } from 'src/app/models/Address';
import { CepService } from 'src/app/services/cep.service';
import { Cadastro } from 'src/app/models/Cadastro';
// import { NgxViacepService } from '@brunoc/ngx-viacep';
// import { ClientesService } from "./clientes.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formCadastro: FormGroup;

  address: Address = new Address("","","","","","")
  // clientes: string[] = [];

  // clienteService: ClientesService;

  //  formCadastro;
  constructor(private cepService: CepService) {
    this.formCadastro = this.createForm(new Cadastro(null,"","",null,"","","","","",null,"","","",""));
    }
    // private formBuilder: FormBuilder
    // this.clienteService = new ClientesService();

  private createForm(cadastro: Cadastro){
    return new FormGroup({
      id: new FormControl(cadastro.idCadastro),
      name: new FormControl(cadastro.name),
      cpf: new FormControl(cadastro.cpf),
      tel: new FormControl(cadastro.tel),
      email: new FormControl(cadastro.email),
      senha: new FormControl(cadastro.senha),
      confirmarSenha: new FormControl(cadastro.confirmarSenha),
      cep: new FormControl(cadastro.cep),
      endereco: new FormControl(cadastro.endereco),
      numeroCasa: new FormControl(cadastro.numeroCasa),
      complementoCasa: new FormControl(cadastro.complementoCasa),
      bairro: new FormControl(cadastro.bairro),
      cidade: new FormControl(cadastro.cidade),
      estado: new FormControl(cadastro.estado),

    })
  }
  

  pegarCEP(){
    this.cepService.getCep(this.formCadastro.value).subscribe((data) => {
      this.address.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formCadastro.controls['endereco'].patchValue(this.address.endereco);
      this.formCadastro.controls['bairro'].patchValue(this.address.bairro);
      this.formCadastro.controls['estado'].patchValue(this.address.estado);
      this.formCadastro.controls['cidade'].patchValue(this.address.cidade);
    })
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

































 