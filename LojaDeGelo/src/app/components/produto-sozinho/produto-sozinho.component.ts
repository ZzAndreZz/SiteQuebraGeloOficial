import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produtos';

@Component({
  selector: 'app-produto-sozinho',
  templateUrl: './produto-sozinho.component.html',
  styleUrls: ['./produto-sozinho.component.css']
})
export class ProdutoSozinhoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.produtos.push(
      new Produto(null, null, 1, "assets/produto1.jpg", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sint. Reiciendis impedit nam voluptatum nemo similique libero, asperiores laboriosam totam illo ullam earum doloremque. Culpa, quidem! Sequi architecto enim ipsa.", 27, 23, 23, 1),
      new Produto(null, null, 2, "assets/gelodecoco.png", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 16.65, 10, 10, 1),
      new Produto(null, null, 3, "assets/produto3.jpg", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 30, 27, 27, 1),
      new Produto(null, null, 4, "assets/produto4.jpg", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 24, 23, 23, 1),
      new Produto(null, null, 5, "assets/produto5.jpg", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 12, 10, 10, 1),
      new Produto(null, null, 6, "assets/saco-de-gelo-1kg.png", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 10, 8, 8, 1),
      new Produto(null, null, 7, "assets/formasdegelo.jpg", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 15, 10, 10, 1),
      new Produto(null, null, 8, "assets/caixa-de-isopor.png", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 24, 23, 23, 1),
      new Produto(null, null, 9, "assets/pinguin1.png", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 1350, 1000, 1000, 1),
      new Produto(null, null, 10, "assets/Olaf.jpg", "Gelo Artificial Reutilizável Pote Com 20 Unidades Bolinha", "", 800, 500, 500, 1),)
  }

}