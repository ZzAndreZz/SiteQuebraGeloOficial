import { Url } from 'url';

export class Produto{
    constructor(
                public cod:number, 
                public imagem: string,
                public titulo: string,
                public desc: string, 
                public precoCheio: number,
                public precoDesconto: number,
                public precoBoleto: number,
                public idCategoria: number){}
}