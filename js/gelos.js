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
        <div class="card col-lg-3 col-md-4 col-6" id="produto3" style="width: 18rem;">
                    <img src="./img/produto3.jpg" height="220px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Gelo flexivel</h5>
                        <a href="#" class="card-text stretched-link">
                            <p> <s>de: R$32,50 </s> <br> <b id="preco">por R$30,00</b> <br> ou R$27,00 via Boleto
                                Bancário</p>
                        </a>
                    </div>
                </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto4" style="width: 18rem;">
                        <img src="./img/produto4.jpg" height="220px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Tech Gel</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$27,00 </s> <br> <b id="preco">por R$24,00</b> <br> ou R$23,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto1" style="width: 18rem;">
                        <img src="./img/produto1.jpg" height="220px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Gelo artificial</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$27,00</s> <br> <b id="preco">por R$24,00</b> <br> ou R$23,00 via Boleto
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
            <div class="card col-lg-3 col-md-4 col-6" id="produto5" style="width: 18rem;">
                        <img src="./img/produto5.jpg" height="220px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Gelo artificial em espuma</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$24,00 </s> <br> <b id="preco">por R$12,00</b> <br> ou R$10,00 via Boleto
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
        <div class="card col-lg-3 col-md-4 col-6" id="produto5" style="width: 18rem;">
                        <img src="./img/produto5.jpg" height="220px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Gelo artificial em espuma</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$24,00 </s> <br> <b id="preco">por R$12,00</b> <br> ou R$10,00 via Boleto
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
            <div class="card col-lg-3 col-md-4 col-6" id="produto4" style="width: 18rem;">
                        <img src="./img/produto4.jpg" height="220px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Tech Gel</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$27,00 </s> <br> <b id="preco">por R$24,00</b> <br> ou R$23,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto1" style="width: 18rem;">
                        <img src="./img/produto1.jpg" height="220px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Gelo artificial</h5>
                            <a href="#" class="card-text stretched-link">
                                <p> <s>de: R$27,00</s> <br> <b id="preco">por R$24,00</b> <br> ou R$23,00 via Boleto
                                    Bancário</p>
                            </a>
                        </div>
            </div>
            <div class="card col-lg-3 col-md-4 col-6" id="produto3" style="width: 18rem;">
                    <img src="./img/produto3.jpg" height="220px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Gelo flexivel</h5>
                        <a href="#" class="card-text stretched-link">
                            <p> <s>de: R$32,50 </s> <br> <b id="preco">por R$30,00</b> <br> ou R$27,00 via Boleto
                                Bancário</p>
                        </a>
                    </div>
                </div>

        `
        produtos.innerHTML = menorPreco;
    }else{
        alert("Nenhuma opção selecionada")
    }
}