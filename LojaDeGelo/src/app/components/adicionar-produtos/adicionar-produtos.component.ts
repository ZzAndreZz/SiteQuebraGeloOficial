import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from 'src/app/models/Produtos';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css']
})
export class AdicionarProdutosComponent implements OnInit {

  formProduto: FormGroup;
  constructor() {
    this.formProduto = this.createForm(new Produto(null, "", "", "", 0, 0, 0, 0));
   }

  private createForm(p: Produto):FormGroup{
    return new FormGroup({
      id: new FormControl(p.id),
      imagem: new FormControl(p.imagem),
      titulo: new FormControl(p.nome),
      desc: new FormControl(p.desc),
      precoCheio: new FormControl(p.precoCheio),
      precoDesconto: new FormControl(p.precoDesconto),
      precoBoleto: new FormControl(p.precoBoleto),
      idCategoria: new FormControl(p.idCategoria)
    })
  }

  enviarProduto(){
    console.log(this.formProduto)
  }

  ngOnInit(): void {
  }

}
