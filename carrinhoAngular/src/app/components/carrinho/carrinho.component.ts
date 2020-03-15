import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { Carrinho } from 'src/app/models/Carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  total: number = 0;

  constructor() { 
    this.carrinho.push(
      new Carrinho(new Produtos("Balde de Gelo", 30.00), 1),
      new Carrinho(new Produtos("Balde de gelo", 20.00), 1),



    )
    this.carrinho.forEach(item =>{
      this.subTotal += item.produto.valor * item.qtd;
    })
  }

  ngOnInit(): void {
  }

  aumentar(carrinho){
    carrinho.qtd++;
    this.subTotal += carrinho.produto.valor
  }

  diminuir(carrinho){
    if(carrinho.qtd > 1){
      carrinho.qtd--;      
      this.subTotal -= carrinho.produto.valor
    }

  
  }
  excluirProduto(item){
    console.log(item)
    this.subTotal -= (item.produto.valor * item.qtd)
    this.carrinho = this.carrinho.filter(itemP => itemP != item)

    }

    

}
