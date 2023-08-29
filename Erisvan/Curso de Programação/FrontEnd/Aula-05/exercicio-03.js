function verificarPontuacao(){
    var pontuacao = parseFloat(document.getElementById("pontuacao").value);
    var resultado = document.getElementById("resultado");

    if(pontuacao < 0){
        document.write("Pontuação inválida!");
    } else if (pontuacao < 1000){
        document.write("Aumente sua pontuação para se tornar um usuário VIP!");
    } else {
        document.write("Usuário VIP!");
    }
}