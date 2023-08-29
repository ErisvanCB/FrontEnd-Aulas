function checkPrime() {
    var numberInput = document.getElementById('number');
    var resultElement = document.getElementById('result');
  
    var number = Number(numberInput.value);
    var isPrime = true;
  
    if (number < 2) {
      isPrime = false;
    } else {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
  
    if (isPrime) {
      resultElement.textContent = number + ' é um número primo.';
    } else {
      resultElement.textContent = number + ' não é um número primo.';
    }
}
  
  
  
  
  
  
  
  