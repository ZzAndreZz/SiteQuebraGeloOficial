
  var preco1 = document.getElementById("item_preco1");
  var preco2 = document.getElementById("item_preco2");
  var divSubTotal = document.getElementById("subtotal");

const imprimirSubTotal = () => {

  let subtotal = eval(preco1.value + "+" + preco2.value);
  let texto = `<li class="list-group-item"><strong> Subtotal </strong>
  <p> <span id="subtotalValor"> R$ ${subtotal},00 </span></p> </li>`

  divSubTotal.innerHTML = texto;
}

imprimirSubTotal();

function removeSifrao(i) {
  i = i.replace("R$", "").replace(".", "").replace(",", ".");
  i = parseFloat(i).toFixed(2);
  return i;
}

// deleta produto do carrinho
function removeProduto(el) {
  var item = $(el).closest(".cart-header");
  var itemPreco = item.find(".item_preco").text();
  var itemQtd = item.find(".qtd").text();
  subtraiValorTotal(itemPreco, itemQtd);
  item.remove();
}

//diminui o valor total quando um item é removido
function subtraiValorTotal(itemPreco, itemQtd) {
  var precoItem = (removeSifrao(itemPreco) * itemQtd).toFixed(2);
  var total = removeSifrao($("subvalorTotal").text());
  var novoTotal = total - precoItem;
  $("subvalorTotal").text("R$" + novoTotal.toFixed(2).replace(".", ","));
}




