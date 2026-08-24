const valorReal = document.querySelector('input[placeholder="Valor em Reais"]');
const valorDolar = document.querySelector('input[placeholder="Valor em Dolar"]');
const botao = document.querySelector("button");

botao.addEventListener("click", function () {

    const real = Number(valorReal.value);

    const cotacao = 5.15;

    const dolar = real / cotacao;

    valorDolar.value = dolar.toFixed(2);
});