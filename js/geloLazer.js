let produto1 = document.getElementById("produto1")
let produto2 = document.getElementById("produto2")
let produto3 = document.getElementById("produto3")
let produto4 = document.getElementById("produto4")
let produto5 = document.getElementById("produto5")
let produto6 = document.getElementById("produto6")
let produto7 = document.getElementById("produto7")
let produto8 = document.getElementById("produto8")
let produto9 = document.getElementById("produto8")
let filtros = document.getElementById("filtros")
let produtos = document.getElementById("produtos")
let btnFiltrar = document.getElementById("filtrar")

btnFiltrar.onclick = function () {
    if (filtros.value == "maiorPreco") {
        let maiorPreco =`
        <div class="card col-lg-3 col-md-4 col-6" id="produto9" style="width: 18rem;">
        <img src="./img/pinguin1.png" height="270" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Mascote do site</h5>
            <a href="#" class="card-text stretched-link">
                <p> <s>de: R$2000,00</s> <br> <b id="preco">por: R$1350,00</b> <br> ou R$1000,00 via
                    Boleto Bancário</p>
            </a>
        </div>
        </div>
        <div class="card col-lg-3 col-md-4 col-6" id="produto10" style="width: 18rem;">
                        <img src="./img/Olaf.png" height="270" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Olaf deboas</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$1000,00</s> <br> <b id="preco">por: R$800,00</b> <br> ou R$500,00 via
                                    Boleto Bancário</p>
                            </a>
                        </div>
                    </div>
                <div class="card col-lg-3 col-md-4 col-6" id="produto8" style="width: 18rem;">
                <img src="./img/caixa-de-isopor.png" height="270" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Caixa de Isopor</h5>
                    <a href="#" class="card-text stretched-link">
                        <p> <s>de: R$50,00</s> <br> <b id="preco">por: R$24,00</b> <br> ou R$23,00 via Boleto
                            Bancário</p>
                    </a>
                </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto2" style="width: 18rem;">
                        <img src="img/gelodecoco.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Gelo de Coco</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$16,65 </s> <br> <b id="preco">por R$15,00</b> <br> ou R$10,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto7" style="width: 18rem;">
                        <img src="./img/formasdegelo.jpg" height="270" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Formas de Gelo</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$18,00</s> <br> <b id="preco">por: R$15,00</b> <br> ou R$10,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto6" style="width: 18rem;">
                        <img src="./img/saco-de-gelo-1kg.png" height="220px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Saco de Gelo 1kg</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$13,00 </s> <br> <b id="preco">por R$10,00</b> <br> ou R$8,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
        `
            produtos.innerHTML = maiorPreco
    }else if(filtros.value == "menorPreco"){
        let menorPreco = `
        <div class="card col-lg-3 col-md-4 col-6" id="produto6" style="width: 18rem;">
        <img src="./img/saco-de-gelo-1kg.png" height="220px" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Saco de Gelo 1kg</h5>
            <a href="#" class="card-text stretched-link">
                <p> <s>de: R$13,00 </s> <br> <b id="preco">por R$10,00</b> <br> ou R$8,00 via Boleto
                    Bancário</p>
            </a>
        </div>
        </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto7" style="width: 18rem;">
                        <img src="./img/formasdegelo.jpg" height="270" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Formas de Gelo</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$18,00</s> <br> <b id="preco">por: R$15,00</b> <br> ou R$10,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto2" style="width: 18rem;">
                        <img src="img/gelodecoco.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Gelo de Coco</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$16,65 </s> <br> <b id="preco">por R$15,00</b> <br> ou R$10,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto8" style="width: 18rem;">
                <img src="./img/caixa-de-isopor.png" height="270" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Caixa de Isopor</h5>
                    <a href="#" class="card-text stretched-link">
                        <p> <s>de: R$50,00</s> <br> <b id="preco">por: R$24,00</b> <br> ou R$23,00 via Boleto
                            Bancário</p>
                    </a>
                </div>
            </div>
                <div class="card col-lg-3 col-md-4 col-6" id="produto10" style="width: 18rem;">
                        <img src="./img/Olaf.png" height="270" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Olaf deboas</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$1000,00</s> <br> <b id="preco">por: R$800,00</b> <br> ou R$500,00 via
                                    Boleto Bancário</p>
                            </a>
                        </div>
                    </div>
                    <div class="card col-lg-3 col-md-4 col-6" id="produto9" style="width: 18rem;">
        <img src="./img/pinguin1.png" height="270" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Mascote do site</h5>
            <a href="#" class="card-text stretched-link">
                <p> <s>de: R$2000,00</s> <br> <b id="preco">por: R$1350,00</b> <br> ou R$1000,00 via
                    Boleto Bancário</p>
            </a>
        </div>
        </div>
        `
        produtos.innerHTML = menorPreco;
    }else if(filtros.value == "lancamento"){
        let lancamento = `
        <div class="card col-lg-3 col-md-4 col-6" id="produto9" style="width: 18rem;">
        <img src="./img/pinguin1.png" height="270" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Mascote do site</h5>
            <a href="#" class="card-text stretched-link">
                <p> <s>de: R$2000,00</s> <br> <b id="preco">por: R$1350,00</b> <br> ou R$1000,00 via
                    Boleto Bancário</p>
            </a>
        </div>
        </div>
        `
        produtos.innerHTML = lancamento;
    }else{
        alert("Nenhuma opção selecionada")
    }
}