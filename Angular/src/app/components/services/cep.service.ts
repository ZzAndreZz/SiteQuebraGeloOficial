import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
// import { Formulario } from '../models/Formulario';
import { Observable } from 'rxjs';
import { Formulario } from 'src/app/model/formulario';

const URL: string = "https://viacep.com.br/ws/";

interface iViaCep{
  cep:string,
  logradouro: string,
  bairro: string,
  uf: string,
  localidade:string

}

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }
  

  
  getCep(formulario: Formulario): Observable<iViaCep>{

    let endereco = this.httpClient.get(URL + formulario.cep + "/json/");

    return this.httpClient.get<iViaCep>(URL + formulario.cep + "/json/")
    .pipe(
      retry(2));
      
  }

}