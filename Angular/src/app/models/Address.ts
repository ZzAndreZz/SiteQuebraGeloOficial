export class Address{
    
    constructor(
        private _cep:string,
        private _endereco: string,
        private _bairro: string,
        private _numero:string,
        private _estado:string,
        private _cidade:string,
        private _complemento?:string,
        private _id?:string,
        ){}


        setEndereco(cep:string, endereco:string, bairro:string, estado:string, cidade:string){
            this._cep = cep;
            this._endereco = endereco;
            this._bairro = bairro;
            this._estado = estado;
            this._cidade = cidade;
        }

        get cep():string{
            return this._cep;
        }
        set setCep(novoCep: string){
            this._cep = novoCep;
        }
        
        get endereco():string{
            return this._endereco;
        }
        get bairro():string{
            return this._bairro;
        }
        get numero():string{
            return this._numero;
        }
        get estado():string{
            return this._estado;
        }
        get cidade():string{
            return this._cidade;
        }

        get complemento():string{
            return this._complemento;
        }
}