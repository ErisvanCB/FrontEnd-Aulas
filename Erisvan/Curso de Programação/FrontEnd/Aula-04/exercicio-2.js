function verificarColesterol(){
    var colesterol = parseInt(document.getElementById("colesterol").value);
    var resultado = document.getElementById("resultado");

    if (colesterol <= 180){
        resultado.textContent = "Seu colesterol está OK!";
    } else{
        resultado.textContent = "Vamos procurar um médico?";
    }
}