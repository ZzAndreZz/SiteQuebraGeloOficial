var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
var cpf = document.getElementById("cpf");
var data = document.getElementById("dtaNascimento");
var nome = document.getElementById("nome");
var senha = document.querySelector(".senha");
var email = document.querySelector(".email");

btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
})

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

// nome.addEventListener('blur', (event) => {
//     if (nome.value == ""){
//         alert ("Por favor preencha o campo Nome");
//     }
// })

// cpf.addEventListener('blur', (event) => {
//     if (cpf.value == ""){
//         alert ("Por favor prencha o campo CPF");
//     }
// })

cpf.addEventListener('keyup', (event) => {
    if (isNaN(cpf.value)) {
        cpf.value = cpf.value.substring(0, (cpf.value.length - 1));
    }
    if (cpf.value.length >= 11) {
        cpf.value = cpf.value.substring(0, 11);
    }
});

data.addEventListener('keyup', (event) => {
    if (isNaN(data.value)) {
        data.value = data.value.substring(0, (data.value.length - 1));
    }

    if (data.value.length >= 8) {
        data.value = data.value.substring(0, 8);
    }
});

