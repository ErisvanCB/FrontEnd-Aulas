const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler números digitados pelo usuário
function lerNumeros() {
  return new Promise((resolve, reject) => {
    let numeros = [];
    let contador = 0;

    const promptNumero = () => {
      if (contador < 10) {
        rl.question(`Digite o número ${contador + 1}: `, (numero) => {
          numeros.push(parseFloat(numero));
          contador++;
          promptNumero();
        });
      } else {
        // rl.close();
        resolve(numeros);
      }
    };

    promptNumero();
  });
}

// Função para calcular quantos números são maiores que 10
function calcularNumerosMaioresQue10(numeros) {
  let quantidade = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
      quantidade++;
    }
  }
  return quantidade;
}

// Ler os números digitados pelo usuário
lerNumeros()
  .then((numeros) => {
    // Calcular quantos números são maiores que 10
    let quantidadeMaioresQue10 = calcularNumerosMaioresQue10(numeros);

    // Exibir a quantidade de números maiores que 10 na tela
    console.log(`Quantidade de números maiores que 10: ${quantidadeMaioresQue10}`);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });