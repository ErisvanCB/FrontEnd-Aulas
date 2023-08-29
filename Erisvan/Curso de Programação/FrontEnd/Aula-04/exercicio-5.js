function verificarNota () {
    var nota = parseInt(document.getElementById("nota").value);
    var resultado = document.getElementById("resultado");

    if (nota < 0 || nota > 10 ) {
        document.write("Nota inválida!")
    }else if (nota < 4){ 
        document.write("Aluno reprovado!")
    }else if (nota < 7){
        document.write("Aluno em recuperação!")
    } else {
        document.write("Aluno aprovado!")
    }
}