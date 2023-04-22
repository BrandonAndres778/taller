function buscarTexto() {
    var texto = document.getElementById("texto").value;
    var buscar = document.getElementById("buscar").value;
    var resultado = document.getElementById("resultado");
    
    var expresion = new RegExp(buscar, "gi");
    var textoDestacado = texto.replace(expresion, '<span class="highlight">$&</span>');
    
    resultado.innerHTML = textoDestacado;
  }
  