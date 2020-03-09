export class Produto{
    constructor(
                public nome: string,
                public valor: number,
                public cod:number, 
                public imagem: string,
                public titulo: string,
                public desc: string, 
                public precoCheio: number,
                public precoDesconto: number,
                public precoBoleto: number,
                public idCategoria: number){}
}