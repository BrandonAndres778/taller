function verificarMateria() {
    const nombre = document.getElementById("nombre").value;
    const materia = document.getElementById("materia").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const promedio = (nota1 + nota2 + nota3) / 3;
  
    let resultado = "";
  
    if (promedio >= 3.0) {
      resultado = " Felicitaciones " + nombre + " , su nota es " + promedio.toFixed(1) + " , Pasaste la materia " + materia;
      document.getElementById("resultado").style.color = "green";
    } else {
      resultado = " Lo siento "  + nombre + " , su nota es " + promedio.toFixed(1) + " , No pasate la materia " + materia;
      document.getElementById("resultado").style.color = "red";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  