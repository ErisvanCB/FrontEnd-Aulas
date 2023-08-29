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

// Função para calcular a soma dos números
function calcularSoma(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

// Função para calcular a média dos números
function calcularMedia(numeros) {
  let soma = calcularSoma(numeros);
  let media = soma / numeros.length;
  return media;
}

// Ler os números digitados pelo usuário
lerNumeros()
  .then((numeros) => {
    // Calcular a soma e a média dos números
    let soma = calcularSoma(numeros);
    let media = calcularMedia(numeros);

    // Exibir a soma e a média
    console.log("Soma: " + soma);
    console.log("Média: " + media);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });