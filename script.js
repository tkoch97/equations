
/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

// Functions

const sum = (number1, number2) => (number1 + number2).toFixed(1);
const subtraction = (number1, number2) => (number1 - number2).toFixed(1);
const multiply = (number1, number2) => (number1 * number2).toFixed(1);
const division = (number1, number2) => (number1 / number2).toFixed(1);
const restDivision = (number1, number2) => (number1 % number2).toFixed(1);

//Code

alert(`
Olá, me fale dois números para que eu possa fazer as equações matemáticas.
Clique em OK para começar.
`)

let number1
let number2


while (true) {
  number1 = (prompt(`Me fale o primeiro número:`));
  if (!isNaN(parseInt(number1))) {
    break;
  }
  alert("Resposta inválida, por favor digite um número válido.")
} 

while (true) {
  number2 = (prompt(`Me fale o segundo número:`));
  if (!isNaN(parseInt(number2))) {
    break;
  }
  alert("Resposta inválida, por favor digite um número válido.")
} 

number1 = Number(number1);
number2 = Number(number2);

alert(`A soma dos dois números é igual a: ${sum(number1, number2)}`)
alert(`A subtração dos dois números é igual a: ${subtraction(number1, number2)}`);
alert(`A multiplicação dos dois números é igual a: ${multiply(number1, number2)}`);
alert(`A divisão dos dois números é igual a: ${division(number1, number2)}`);
alert(`O resto da divisão dos dois números é igual a: ${restDivision(number1, number2)}`);

if (number1 === number2) {
  alert(`Os dois números que você digitou são iguais`);
} else {
  alert(`Os dois números que você digitou são diferentes.`);
}

if (sum(number1, number2) % 2 === 0) {
  alert(`O resultado da soma dos dois números é PAR: ${sum(number1, number2)} `);
}else {
  alert(`O resultado da soma dos dois números é ÍMPAR: ${sum(number1, number2)} `);
}