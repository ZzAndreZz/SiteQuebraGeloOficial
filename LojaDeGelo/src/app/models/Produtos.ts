export class Produto{
    constructor(
                public id?:number, 
                public imagem?: string,
                public nome?: string,
                public desc?: string, 
                public precoCheio?: number,
                public precoDesconto?: number,
                public precoBoleto?: number,
                public idCategoria?: number){}
}