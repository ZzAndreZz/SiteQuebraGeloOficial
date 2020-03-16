import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Entrega } from 'src/app/models/Entrega';
import { Address } from 'src/app/models/Address';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cepService: CepService) {
    this.formEntrega = this.createForm(new Entrega());
   }

  address: Address = new Address("","","","","","")

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
    })
  }



  pegarCpf(){
    this.cepService.getCep(this.formEntrega.value).subscribe((data) => {
      this.address.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formEntrega.controls['endereco'].patchValue(this.address.endereco);
      this.formEntrega.controls['bairro'].patchValue(this.address.bairro);
      this.formEntrega.controls['estado'].patchValue(this.address.estado);
      this.formEntrega.controls['cidade'].patchValue(this.address.cidade);
    })
  }



  compraRealizada(){
    console.log(this.formEntrega.value)
  }



  



  ngOnInit(): void {
}}
