function contarRegressivamente() {
    // Tempo inicial em segundos
    var number = parseFloat(document.getElementById("number").value);
    var resultado = document.getElementById("resultado")
  
    function countdown() {
      // Atualiza o elemento HTML com o valor atual dos segundos
      document.getElementById('countdown').textContent = number;
  
      if (number === 0) {
        // Quando a contagem regressiva chega a zero
        alert('Contagem regressiva finalizada!');
      } else {
        // Reduz os segundos e chama a função countdown novamente após 1 segundo
        number--;
        setTimeout(countdown, 1000);
      }
    }
  
    // Inicia a contagem regressiva
    countdown();
  };