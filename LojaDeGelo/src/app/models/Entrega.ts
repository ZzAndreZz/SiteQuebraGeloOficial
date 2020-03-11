export class Entrega {
    constructor(public codEntrega?:number, 
        public CEPUsuario?: string, 
        public enderecoUsuario?: string,
        public numeroEndereco?: number,
        public complementoEndereco?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public codPagamento?:number, 
        public nroCartao?: string, 
        public dtaValidade?: Date,
        public CVV?: number,
        public nomeTitular?: string,
        public CPFtitular?: number
        ) {}
}