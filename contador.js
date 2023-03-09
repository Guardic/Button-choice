var contadorAzul = 0;
var contadorVermelho = 0;

// Atribui um evento de clique ao botão azul
document.getElementById("botao-azul").addEventListener("click", function() {
  // Incrementa o contador do botão azul
  contadorAzul++;
  document.getElementById("contador-azul").innerHTML = contadorAzul;
});

// Atribui um evento de clique ao botão vermelho
document.getElementById("botao-vermelho").addEventListener("click", function() {
  // Incrementa o contador do botão vermelho
  contadorVermelho++;
  document.getElementById("contador-vermelho").innerHTML = contadorVermelho;
});
