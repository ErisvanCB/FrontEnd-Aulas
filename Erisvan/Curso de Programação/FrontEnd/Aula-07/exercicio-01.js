const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSoma(num1, num2) {
  return num1 + num2;
}

rl.question('Digite o primeiro número: ', (input1) => {
  const num1 = parseFloat(input1);

  rl.question('Digite o segundo número: ', (input2) => {
    const num2 = parseFloat(input2);

    const resultado = calcularSoma(num1, num2);

    console.log('A soma dos números é: ', resultado);

    rl.question("Pressione Enter para encerrar o programa...", () => {
      rl.close();
    });
  });
});