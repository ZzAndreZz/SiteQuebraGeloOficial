import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';
import { Produto } from 'src/app/models/Produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  produtos: Produto[] = []
  produtosExibidos: Produto[] = []

  constructor(private router: Router) { 
    this.produtos.push(
      new Produto(1, "assets/produto1.jpg", "Gelo Artificial", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sint. Reiciendis impedit nam voluptatum nemo similique libero, asperiores laboriosam totam illo ullam earum doloremque. Culpa, quidem! Sequi architecto enim ipsa.", 27, 24, 23, 2),
      new Produto(2, "assets/gelodecoco.png", "Gelo de Coco", "", 16.65, 15, 10, 3),
      new Produto(3, "assets/produto3.jpg", "Gelo flexivel", "", 32.50, 30, 27, 2),
      new Produto(4, "assets/produto4.jpg", "Tech Gel", "", 27, 24, 23, 2),
      new Produto(5, "assets/produto5.jpg", "Gelo artificial em espuma", "", 24, 12, 10, 2),
      new Produto(6, "assets/saco-de-gelo-1kg.png", "Saco de Gelo 1kg", "", 13, 10, 8, 1),
      new Produto(7, "assets/formasdegelo.jpg", "Formas de Gelo", "", 18, 15, 10, 0),
      new Produto(8, "assets/caixa-de-isopor.png", "Caixa de isopor", "", 50, 24, 23, 0),
      new Produto(9, "assets/pinguin1.png", "Mascote do site", "", 2000, 1350, 1000, 3),
      new Produto(10, "assets/Olaf.png", "Olaf", "", 1000, 800, 500, 3),)
    for(let i = 0; i < this.produtos.length; i++){
      this.produtosExibidos.push(this.produtos[i])
    }
  }

  categoriaSelecionada(categoria: Categoria) {
    if(categoria.idCategoria != 0){
      this.produtos = this.produtosExibidos.filter(produto => produto.idCategoria == categoria.idCategoria)
    }else{
      this.produtos = this.produtosExibidos
    }
  }

  filtrar(id: number) {
    if(id == 1){
      for(let i = 0; i < this.produtos.length; i++){
        for(let x = 0; x < this.produtos.length; x++){
          if(this.produtos[i].precoDesconto > this.produtos[x].precoDesconto){
            let aux = this.produtos[i];
            this.produtos[i] = this.produtos[x];
            this.produtos[x] = aux;
          }
        }
      }
    }else if(id == 2){
      for(let i = 0; i < this.produtos.length; i++){
        for(let x = 0; x < this.produtos.length; x++){
          if(this.produtos[i].precoDesconto < this.produtos[x].precoDesconto){
            let aux = this.produtos[i];
            this.produtos[i] = this.produtos[x];
            this.produtos[x] = aux;
          }
        }
      }
    }
  }

  produtoSelecionado(produto){
      this.router.navigate(['/lista-de-produtos', produto.id])
  }

ngOnInit(): void {
}
}
