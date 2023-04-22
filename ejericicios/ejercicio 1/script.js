const textarea = document.getElementById('texto');
const contador = document.getElementById('contador');

textarea.addEventListener('input', () => {
  contador.textContent = textarea.value.length;
});