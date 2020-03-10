import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { Formulario } from 'src/app/model/formulario';
import { CepService } from 'src/app/services/cep.service';
import { Entrega } from 'src/app/model/Entrega';

// import { ClientesService } from "./clientes.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  constructor(private cepService: CepService) {
    this.formEntrega = this.createForm(new Entrega());
  }

  formulario: Formulario = new Formulario("", "", "", "", "sp", "sp")

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


  pegarCpf() {
    this.cepService.getCep(this.formEntrega.value).subscribe((data) => {
      this.formulario.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formEntrega.controls['endereco'].patchValue(this.formulario.endereco);
      this.formEntrega.controls['bairro'].patchValue(this.formulario.bairro);
      this.formEntrega.controls['estado'].patchValue(this.formulario.estado);
      this.formEntrega.controls['cidade'].patchValue(this.formulario.cidade);
    })
  }



  compraRealizada() {
    console.log(this.formEntrega.value)
  }


  get cpf() {
    return this.formEntrega.get('CPFtitular');
  }



  ngOnInit(): void {
  }
}
