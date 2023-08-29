window.onload = function() {
    // Tempo inicial em segundos
    var seconds = 10;
  
    function countdown() {
      // Atualiza o elemento HTML com o valor atual dos segundos
      document.getElementById('countdown').textContent = seconds;
  
      if (seconds === 0) {
        // Quando a contagem regressiva chega a zero
        alert('Contagem regressiva finalizada!');
      } else {
        // Reduz os segundos e chama a função countdown novamente após 1 segundo
        seconds--;
        setTimeout(countdown, 1000);
      }
    }
  
    // Inicia a contagem regressiva
    countdown();
  };