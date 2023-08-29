window.onload = function() {
    var resultElement = document.getElementById('result');
    var result = '';
  
    // Calcula a tabuada do 5 e armazena os resultados na variável 'result'
    for (var i = 1; i <= 10; i++) {
      var number = 5;
      var multiplication = number * i;
      
      result += number + ' x ' + i + ' = ' + multiplication + '<br>';
    }
  
    // Insere os resultados na div 'result' do HTML
    resultElement.innerHTML = result;
  };