// function soma(nome){
//     var num = 10;
//     let numero = 255;
//     // var novo = nome;

//     console.log("o valor de num é: " + num);
//     console.log("o valur de número é: " + numero);
//     console.log("a soma de num e número é: " + (num + numero));
//     console.log("o valor de nome é: " + nome);
// }

// // soma();

// var nome = "Eu";
// soma(nome);

function DarkMode(){
    let conteudo = document.body;
    let divPai = document.getElementById("flexPai");

    conteudo.className = "darkMode"
}

function LightMode(){
    let conteudo = document.body;

    conteudo.className = "";
}