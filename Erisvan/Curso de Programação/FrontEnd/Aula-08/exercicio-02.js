const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vetor = [];

const promptNumeros = (i) => {
  if (i < 5) {
    // Solicita ao usuário que digite o número atual
    rl.question(`Digite o número ${i + 1}: `, (numero) => {
      // Converte o número em um valor inteiro e adiciona ao vetor
      vetor.push(parseInt(numero));
      // Chama a função novamente para o próximo número
      promptNumeros(i + 1);
    });
  } else {
    console.log('Valores do vetor:');
    console.log(vetor);

    rl.question('Qual posição do vetor você quer alterar? ', (posicao) => {
      if (posicao >= 0 && posicao < vetor.length) {
        rl.question('Qual número você quer inserir? ', (novoNumero) => {
          // Converte o novo número em um valor inteiro e atualiza a posição escolhida do vetor
          vetor[posicao] = parseInt(novoNumero);
          console.log('O vetor agora é composto por:');
          console.log(vetor);
          // rl.close();
        });
      } else {
        console.log('Posição inválida!');
        // rl.close();
      }
    });
  }
};

// Inicia o processo de solicitar os números ao usuário, começando pela posição 0
promptNumeros(0);

promptNumeros(0);