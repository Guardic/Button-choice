// Atribui constantes aos elementos HTML
const botaoAzul = document.getElementById("botao-azul");
const botaoVermelho = document.getElementById("botao-vermelho");
const contadorAzul = document.getElementById("contador-azul");
const contadorVermelho = document.getElementById("contador-vermelho");

// Atribui eventos de clique aos botões
botaoAzul.addEventListener("click", () => {
  // Incrementa o contador do botão azul
  let valor = parseInt(contadorAzul.textContent);
  contadorAzul.textContent = ++valor;
});

botaoVermelho.addEventListener("click", () => {
  // Incrementa o contador do botão vermelho
  let valor = parseInt(contadorVermelho.textContent);
  contadorVermelho.textContent = ++valor;
});
