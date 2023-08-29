const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para ler os dados de cada aluno
function lerDadosAluno() {
  return new Promise((resolve, reject) => {
    rl.question("Digite o nome do aluno: ", (nome) => {
      rl.question("Digite a média do aluno: ", (media) => {
        resolve({ nome, media: parseFloat(media) });
      });
    });
  });
}

// Ler os dados dos cinco alunos
async function lerDadosAlunos() {
  let alunos = [];

  for (let i = 1; i <= 5; i++) {
    console.log(`Aluno ${i}`);
    const dadosAluno = await lerDadosAluno();
    alunos.push(dadosAluno);
  }

  return alunos;
}

// Filtrar alunos com média acima ou igual a 6
function filtrarAlunosAprovados(alunos) {
  return alunos.filter((aluno) => aluno.media >= 6);
}

// Ler os dados dos alunos
lerDadosAlunos()
  .then((alunos) => {
    // Filtrar os alunos aprovados (média >= 6)
    const alunosAprovados = filtrarAlunosAprovados(alunos);

    // Exibir os nomes dos alunos aprovados na tela
    console.log("Alunos aprovados:");
    alunosAprovados.forEach((aluno) => {
      console.log(aluno.nome);
    });

    // rl.close();
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });