function verificarPlano() {
    var salario = document.getElementById("salario").value;

    if (salario > 3000){
        alert ("Oferecer Plano Alfa.")
    }else{
        alert("Oferecer Plano Beta.")
    }
}