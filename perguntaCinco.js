/*5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/

function inverString(string) {
  let stringInver = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInver += string[i];
  }
  return stringInver;
}

// String que será invertida
const atualString = "Olá, meu nome é Pedro!";

// Inverção da string
const stringInver = inverString(atualString);

console.log("String principal:", atualString);
console.log("String invertida:", stringInver);
