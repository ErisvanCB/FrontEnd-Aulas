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
      if (contador < 7) {
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

// Função para contar quantos números são pares e quantos são ímpares
function contarParesEImpares(numeros) {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  return { pares, impares };
}

// Ler os números digitados pelo usuário
lerNumeros()
  .then((numeros) => {
    // Contar quantos números são pares e quantos são ímpares
    let { pares, impares } = contarParesEImpares(numeros);

    // Exibir o resultado na tela
    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });