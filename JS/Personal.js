document.getElementById('configForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = localStorage.getItem('authenticated'); // Obtener el nombre de usuario autenticado
    if (!username) {
        alert('Debes iniciar sesión para guardar la configuración.');
        return;
    }

    const tamanioFuente = document.getElementById('tamanioFuente').value;
    const colorFondo = document.getElementById('colorFondo').value;

    // Guardar configuración en localStorage con el nombre de usuario como clave
    localStorage.setItem(username + '_config', JSON.stringify({ tamanioFuente, colorFondo }));

    const pElements = document.querySelectorAll('p');

    pElements.forEach(function(element) {
        element.style.fontSize = tamanioFuente + 'px';
    });

    document.body.style.backgroundColor = colorFondo;
});