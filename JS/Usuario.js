document.getElementById('login-form').addEventListener('submit', function(event) {
event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === 'Ander' && password === 'Larrea') 
{
    localStorage.setItem("authenticated", "true");
	window.location.href = "P4.5.1.html";
	const container = document.querySelector('.container');
    if (container) {
    container.remove();
    }
} 
else if (username === 'Asier' && password === 'Fresno') 
{
    localStorage.setItem("authenticated", "true");
	window.location.href = "P4.5.1.html";
	const container = document.querySelector('.container');
    if (container) {
    container.remove();
    }
} 
else if (username === 'Daniel' && password === 'Escarcena') 
{
    localStorage.setItem("authenticated", "true");
	window.location.href = "P4.5.1.html";
	const container = document.querySelector('.container');
    if (container) {
    container.remove();
    }
} 
else if (username === 'Lucas' && password === 'Calvo') 
{
    localStorage.setItem("authenticated", "true");
	window.location.href = "P4.5.1.html";
	const container = document.querySelector('.container');
    if (container) {
    container.remove();
    }
} 
else if (username === 'Mario' && password === 'Martin') 
{
    localStorage.setItem("authenticated", "true");
	window.location.href = "P4.5.1.html";
	const container = document.querySelector('.container');
    if (container) {
    container.remove();
    }
} 

else 
{
    alert('Credenciales incorrectas');
}
});