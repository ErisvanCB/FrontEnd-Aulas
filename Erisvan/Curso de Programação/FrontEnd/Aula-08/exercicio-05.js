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
      if (contador < 8) {
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

// Função para encontrar o maior número
function encontrarMaiorNumero(numeros) {
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}

// Função para encontrar o menor número
function encontrarMenorNumero(numeros) {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

// Ler os números digitados pelo usuário
lerNumeros()
  .then((numeros) => {
    // Encontrar o maior e o menor número
    let maior = encontrarMaiorNumero(numeros);
    let menor = encontrarMenorNumero(numeros);

    // Exibir o maior e o menor número na tela
    console.log("Maior número: " + maior);
    console.log("Menor número: " + menor);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });