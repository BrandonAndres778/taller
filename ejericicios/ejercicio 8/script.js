function identificarNumeros() {
    const input = document.getElementById('number-list').value;
    const numbers = input.split(',');
    let pares = [];
    let impares = [];
  
    for (let i = 0; i < numbers.length; i++) {
      const number = parseInt(numbers[i]);
      if (Number.isInteger(number) && number >= 0) {
        if (number % 2 === 0) {
          pares.push(number);
        } else {
          impares.push(number);
        }
      }
    }
  
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Números pares: ${pares.join(', ')}</p><p>Números impares: ${impares.join(', ')}</p>`;
  }
  