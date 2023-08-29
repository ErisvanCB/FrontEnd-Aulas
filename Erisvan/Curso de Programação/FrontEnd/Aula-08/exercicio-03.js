const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const estados = [];

const promptEstado = (i) => {
  if (i < 5) {
    rl.question('Digite um estado brasileiro: ', (estado) => {
      estados.push(estado);
      promptEstado(i + 1);
    });
  } else {
    // rl.close();
    console.log('Valores nas posições 0, 2 e 4:');
    console.log(estados[0]);
    console.log(estados[2]);
    console.log(estados[4]);
  }
};

promptEstado(0);