export class Cadastro{
    constructor(
        public idCadastro: number,
        public name: string,
        public cpf: string,
        public tel: number,
        public email: string,
        public senha: string,
        public confirmarSenha: string,
        public cep: string,
        public endereco: string,
        public numeroCasa: number,
        public complementoCasa: string,
        public bairro: string,
        public cidade: string,
        public estado: string,
        ){}
}