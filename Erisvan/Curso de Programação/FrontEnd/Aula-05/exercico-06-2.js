function contarRegressivamente(){
    var numero = parseFloat(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    while(numero > 0){
        numero --;
        document.write(numero + "<br>");
    }
}