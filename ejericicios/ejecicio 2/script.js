function identificarTipo() {
    var valor = document.getElementById("input").value;
    if (isNaN(valor)) {
      document.getElementById("resultado").innerHTML = "El valor ingresado es de tipo texto";
    } else {
      document.getElementById("resultado").innerHTML = "El valor ingresado es de tipo numerico";
    }
  }
  