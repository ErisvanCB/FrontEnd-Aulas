function tabuadaDe5(){
    var multiplicador = 0;
    var resultado = document.getElementById("resultado");

    while(multiplicador < 10){
        ++ multiplicador;
        var resultadoMultiplicacao = 5 * multiplicador;

        document.write("5 x " + multiplicador + " = " + resultadoMultiplicacao + "<br>");
    }
}