import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators'
import { Address } from '../models/Address';
import { Observable } from 'rxjs';

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
  

  
  getCep(address: Address): Observable<iViaCep>{

    let endereco = this.httpClient.get(URL + address.cep + "/json/");

    return this.httpClient.get<iViaCep>(URL + address.cep + "/json/")
    .pipe(
      retry(2));
      
  }


}