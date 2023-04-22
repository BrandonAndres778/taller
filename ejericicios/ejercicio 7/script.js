function verificarDivisibilidad() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
  
    if (num1 % num2 === 0) {
      document.getElementById("resultado").innerHTML = `${num1} es divisible por ${num2}`;
    } else {
      document.getElementById("resultado").innerHTML = `${num1} no es divisible por ${num2}`;
    }
  }
  