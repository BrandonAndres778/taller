function verificarEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
  
    if (edad >= 18) {
      document.getElementById("resultado").innerHTML = "Hola " + nombre + ", eres mayor de edad.";
    } else {
      document.getElementById("resultado").innerHTML = "Hola " + nombre + ", no eres mayor de edad.";
    }
  
    document.getElementById("resultado").style.display = "block";
  }
  