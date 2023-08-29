function verificarFrequencia() {
    var diasComparecidos = parseInt(document.getElementById("diasComparecidos").value);
    var resultado = document.getElementById("resultado");
    var totalDeDias = parseInt(document.getElementById("totalDeDias").value);
    var resultado2 = document.getElementById("resultado2");

    var frequencia = diasComparecidos / totalDeDias * 100;

    if (frequencia > 70) {
        document.write("Você compareceu a " + frequencia.toFixed(0) + "% das aulas. Status: APROVADO!")
    } else {
        document.write("Você compareceu a " + frequencia.toFixed(0) + "% das aulas. Status: REPROVADO!")
    }
    

}