function verificarComissao () {

    var comissao = parseInt(document.getElementById("comissao").value);
    var resultado = document.getElementById("resultado");

    if (comissao > 100000){
        comissao = comissao / 100 * 4;
        document.write(comissao);
    } else {
        comissao = comissao / 100 * 2;
        document.write(comissao);
    }

}