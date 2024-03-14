/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

function verificadorFibonacci(numero) {
  let num1 = 0;
  let num2 = 1;
  let numTemp;

  while (num1 <= numero) {
    if (num1 === numero) {
      return true; // Caso pertença à sequência Fibonacci
    }
    numTemp = num1 + num2;
    num1 = num2;
    num2 = numTemp;
  }

  return false; // Caso não pertença à sequência Fibonacci
}

// Número que será verificado se pertence à sequência de Fibonacci
const verificaNumero = 35;

// Validação se o número é pertencente à sequência de Fibonacci
if (verificadorFibonacci(verificaNumero)) {
  console.log(`${verificaNumero} é pertencente à sequência de Fibonacci.`);
} else {
  console.log(`${verificaNumero} não é pertencente à sequência de Fibonacci.`);
}
