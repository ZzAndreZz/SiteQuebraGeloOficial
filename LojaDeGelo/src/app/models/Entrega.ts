export class Entrega {
    constructor(public codEntrega?:number, 
        public CEPUsuario?: string, 
        public enderecoUsuario?: string,
        public numeroEndereco?: number,
        public complementoEndereco?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        ) {}
}