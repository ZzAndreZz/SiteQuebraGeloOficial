import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
// import { Entrega } from 'src/app/models/Entrega';
import { Formulario } from 'src/app/models/Formulario';
import { Address } from 'src/app/models/Address';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private cepService: CepService) {
    this.formFormulario = this.createForm(new Formulario());
   }

  address: Address = new Address("","","","","","")


  formFormulario: FormGroup

  private createForm(formulario: Formulario) {
    return new FormGroup({
      cod: new FormControl(formulario.codFormulario),
      cep: new FormControl(formulario.CEPUsuario),
      endereco: new FormControl(formulario.enderecoUsuario),
      nroEndereco: new FormControl(formulario.numeroEndereco),
      complemento: new FormControl(formulario.complementoEndereco),
      bairro: new FormControl(formulario.bairro),
      cidade: new FormControl(formulario.cidade),
      estado: new FormControl(formulario.estado),
    })
  }



  pegarCep(){
    this.cepService.getCep(this.formFormulario.value).subscribe((data) => {
      this.address.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formFormulario.controls['endereco'].patchValue(this.address.endereco);
      this.formFormulario.controls['bairro'].patchValue(this.address.bairro);
      this.formFormulario.controls['estado'].patchValue(this.address.estado);
      this.formFormulario.controls['cidade'].patchValue(this.address.cidade);
    })
  }



  // compraRealizada(){
  //   console.log(this.formFormulario.value)
  // }




onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formFormulario);
    // Usar o método reset para limpar os controlesfna tela
    this.formFormulario.reset(new  Formulario());
  }

  // onSubmit() {
  //   aqui você pode implementar a logica para fazer seu formulário salvar
  //   console.log(this.formCliente.value);
   
  //   chamando a função createForm para limpar os campos na tela
  //   this.createForm(new Cliente());
  // }
  



  ngOnInit(): void {
}}
