function calcularTabuada() {

    var number = parseFloat(document.getElementById("number").value);
    var resultado = document.getElementById("resultado");
  
    for (var i = 1; i <= 10; i++) {
      var multiplication = number * i;
      
      document.write(number + " x " + i + " = " + multiplication + '<br>');
    }
};