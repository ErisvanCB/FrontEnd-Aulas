function verificarStatusDeAtendimento(){
    var sigla = document.getElementById("sigla").value;
    // var sigla2 = sigla.toUpperCase("sigla2");
    var resultado = document.getElementById("resultado");

    switch (sigla){
        case 'a':
            document.write("Atendido!");
            break;
        case 'pa': 
            document.write("Parcialmente atendido!");
            break;
        case 'na':
            document.write("Não atendido!");
            break;
        default:
            document.write("Sigla digitada inválida!")    
    }

}