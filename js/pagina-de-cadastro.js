let inputCPF = document.getElementById('cpfUsuario');
let inputSenha = document.getElementById('senhaUsuario');
let inputConfirmarSenha = document.getElementById('confirmarSenhaUsuario');
let inputCPFTitular = document.getElementById('cpfTitular');
let inputCEP = document.getElementById('cepUsuario');
let inputEndereco = document.getElementById('enderecoUsuario');
let inputBairro = document.getElementById('bairroUsuario');
let inputCidade = document.getElementById('cidadeUsuario');
let selectEstado = document.getElementById('estadoUsuario')

//validação cpf 
inputCPF.addEventListener('keyup', (event)=>{
    //inputCPF.value
        if(isNaN(inputCPF.value)){
            inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length -1))
        }
        if(inputCPF.value.length >= 11){
            inputCPF.value = inputCPF.value.substring(0, 11)
        }
})




function buscarCep(cep){
    let config = {
        method:"get"
    }
    fetch(`http://viacep.com.br/ws/${cep}/json/`, config)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){ 
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }
        inputCEP.setAttribute('class', 'form-control is-valid')
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        selectEstado.value = dados.uf

        // $('#compraFinalizada').modal('show')
        
    })
}

inputCEP.addEventListener('keyup',  (event)=>{
   
        if(isNaN(inputCEP.value)){
            inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length -1))
        }
        if(inputCEP.value.length >= 8){
            inputCEP.value = inputCEP.value.substring(0, 8)
            buscarCep(inputCEP.value)
        }
})



//validação  senha
inputConfirmarSenha.addEventListener('keyup', (e)=>{
    if(inputConfirmarSenha.value != inputSenha.value){
        inputConfirmarSenha.setAttribute('class', 'form-control is-invalid')
    }else {
        inputConfirmarSenha.setAttribute('class', 'form-control is-valid')
    }
})


