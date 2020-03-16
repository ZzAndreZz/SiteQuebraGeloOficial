import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  salvarCarrinho(carrinho){
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }

  recuperarCarrinho(){
    return JSON.parse(localStorage.getItem("carrinho")) 
  }
}
