const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler os dados de cada pessoa
function lerDadosPessoa() {
  return new Promise((resolve, reject) => {
    rl.question("Digite o nome da pessoa: ", (nome) => {
      rl.question("Digite o telefone da pessoa: ", (telefone) => {
        rl.question("Digite a cidade da pessoa: ", (cidade) => {
          resolve({ nome, telefone, cidade });
        });
      });
    });
  });
}

// Ler os dados das seis pessoas
async function lerDadosPessoas() {
  let pessoas = [];

  for (let i = 1; i <= 2; i++) {
    console.log(`Pessoa ${i}`);
    const dadosPessoa = await lerDadosPessoa();
    pessoas.push(dadosPessoa);
  }

  return pessoas;
}

// Filtrar pessoas que moram em "Niterói"
function filtrarPessoasNiteroi(pessoas) {
  return pessoas.filter((pessoa) => pessoa.cidade.toLowerCase() === "niterói");
}

// Ler os dados das pessoas
lerDadosPessoas()
  .then((pessoas) => {
    // Filtrar as pessoas que moram em "Niterói"
    const pessoasNiteroi = filtrarPessoasNiteroi(pessoas);

    // Exibir o nome e telefone das pessoas de Niterói na tela
    console.log("Pessoas de Niterói:");
    pessoasNiteroi.forEach((pessoa) => {
      console.log(`Nome: ${pessoa.nome}, Telefone: ${pessoa.telefone}`);
    });

    // rl.close();
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });