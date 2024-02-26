
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');
});

document.getElementById('nav-link').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
  });

  document.getElementById('fecharFormulario').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
  });