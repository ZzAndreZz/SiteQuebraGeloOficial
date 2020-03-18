import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public categoria: Categoria[] = []
  @Output() categoriaClicada = new EventEmitter();

  constructor() {

    this.categoria.push(new Categoria(1, "Gelos"));
    this.categoria.push(new Categoria(2, "Gelos para medicação"));
    this.categoria.push(new Categoria(3, "Gelos para lazer"));

  }

  ngOnInit(): void {
  }

}
