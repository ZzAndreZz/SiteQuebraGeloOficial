//pesquisar o cep


let inputCEP = document.getElementById('cepUsuario')

inputCEP.addEventListener('keyup', (event) => {
    if (isNaN(inputCEP.value)) {
        inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length - 1));
    }
    if (inputCEP.value.length >= 8) {
        inputCEP.value = inputCEP.value.substring(0, 8);
        buscarCEP(inputCEP.value)
  }
});


let inputEndereco = document.getElementById('enderecoUsuario');
let inputBairro = document.getElementById('bairroUsuario');
let inputCidade = document.getElementById('cidadeUsuario');
let selectEstado = document.getElementById('cidadeUsuario');

function buscarCEP(cep){
    let config ={
        method:"get"
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`,config)
    .then(response => {
        return response.json();
    })
    .then((dados) => {
        if (dados.erro){
            return inputCEP.setAttribute('class', 'form-control is invalid')
        }
        inputCEP.setAttribute('class', 'form-control is valid')
        inputEndereco.value = dados.logradouro;
        inputBairro.value = dados.bairro;
        inputCidade.value = dados.localidade;

    })













//numero do cartão 

let inputCartao = document.getElementById('numeroCartao')

inputCartao.addEventListener('keyup', (event) => {
    if (isNaN(inputCartao.value)) {
        inputCartao.value = inputCartao.value.substring(0, (inputCartao.value.length - 1));
    }
    if (inputCartao.value.length >= 16) {
        inputCartao.value = inputCartao.value.substring(0, 16);
  }
});

//validar CVV

let inputCVV = document.getElementById('segurCartao')

inputCVV.addEventListener('keyup', (event) => {
    if (isNaN(inputCVV.value)) {
        inputCVV.value = inputCVV.value.substring(0, (inputCVV.value.length - 1));
    }
    if (inputCVV.value.length >= 3) {
        inputCVV.value = inputCVV.value.substring(0, 3);
  }
});


//validação do CPF do titular

let inputCPFTitu = document.getElementById('cpfTituCartao');

inputCPFTitu.addEventListener('keyup', (event) => {
    if (isNaN(inputCPFTitu.value)) {
        inputCPFTitu.value = inputCPFTitu.value.substring(0, (inputCPFTitu.value.length - 1));
    }
    if (inputCPFTitu.value.length >= 11) {
        inputCPFTitu.value = inputCPFTitu.value.substring(0, 11);
    }

});}
