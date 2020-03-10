import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Entrega } from 'src/app/models/Entrega';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() {
    this.formEntrega = this.createForm(new Entrega());
   }
  formEntrega: FormGroup

  private createForm(entrega: Entrega) {
    return new FormGroup({
      cod: new FormControl(entrega.codEntrega),
      cep: new FormControl(entrega.CEPUsuario),
      endereco: new FormControl(entrega.enderecoUsuario),
      nroEndereco: new FormControl(entrega.numeroEndereco),
      complemento: new FormControl(entrega.complementoEndereco),
      bairro: new FormControl(entrega.bairro),
      cidade: new FormControl(entrega.cidade),
      estado: new FormControl(entrega.estado),
      nroCartao: new FormControl(entrega.nroCartao),
      dtaValidade: new FormControl(entrega.dtaValidade),
      CVV: new FormControl(entrega.CVV),
      nomeTitular: new FormControl(entrega.nomeTitular),
      CPFtitular: new FormControl(entrega.CPFtitular)
    })
  }

  compraRealizada(){
    console.log(this.formEntrega.value)
  }


  get cpf() {
    return this.formEntrega.get('CPFtitular');
  }



  ngOnInit(): void {
}}
