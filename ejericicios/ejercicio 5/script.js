function esPar() {
    var numero = document.getElementById("numero").value;
  
    if (numero == "" || isNaN(numero)) {
      document.getElementById("resultado").innerHTML = "Debes ingresar un número entero positivo.";
    } else if (numero < 0) {
      document.getElementById("resultado").innerHTML = "Debes ingresar un número entero positivo.";
    } else if (numero % 2 == 0) {
      document.getElementById("resultado").innerHTML = "El número " + numero + " es par.";
    } else {
      document.getElementById("resultado").innerHTML = "El número " + numero + " es impar.";
    }
  }
  