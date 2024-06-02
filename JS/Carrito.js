const productos = [
{ id: 1, nombre: "Fuente de alimentación", precio: 48.99, cantidad: 0 },
{ id: 2, nombre: "Disipador", precio: 106.00, cantidad: 0 },
{ id: 3, nombre: "CPU", precio: 383.99, cantidad: 0 },
{ id: 4, nombre: "Placa base", precio: 82.05, cantidad: 0 },
{ id: 5, nombre: "GPU", precio: 592.95, cantidad: 0 },
{ id: 6, nombre: "Tarjeta de sonido", precio: 33.00, cantidad: 0 },
{ id: 7, nombre: "RAM", precio: 89.00, cantidad: 0 },
{ id: 8, nombre: "Disco duro HDD", precio: 61.00, cantidad: 0 },
{ id: 9, nombre: "Disco duro SSD", precio: 100.00, cantidad: 0 },
{ id: 10, nombre: "TORRE", precio: 128.92, cantidad: 0 }];
const carrito = document.getElementById("productos");
const totalElemento = document.getElementById("total");
let total = 0;
function actualizarTotal() {
total = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
totalElemento.textContent = `${total.toFixed(2)}€`;
}
function agregarAlCarrito(producto) {
const divProducto = document.createElement("div");
divProducto.classList.add("producto");
const nombre = document.createElement("span");
nombre.textContent = producto.nombre;
nombre.style.marginRight = "10px";
const precio = document.createElement("span");
precio.textContent = `${producto.precio.toFixed(2)}€`;
precio.style.marginRight = "10px";
const cantidad = document.createElement("span");
cantidad.textContent = producto.cantidad;
cantidad.style.margin = "0 10px";
const botonEliminar = document.createElement("button");
botonEliminar.textContent = "-";
botonEliminar.style.marginRight = "5px";
botonEliminar.addEventListener("click", () => {
if (producto.cantidad > 0) {
producto.cantidad--;
cantidad.textContent = producto.cantidad;
actualizarTotal();
}
if (producto.cantidad === 0) {
divProducto.remove();
}
});
const botonAgregar = document.createElement("button");
botonAgregar.textContent = "+";
botonAgregar.style.marginLeft = "5px";
botonAgregar.addEventListener("click", () => {
producto.cantidad++;
cantidad.textContent = producto.cantidad;
actualizarTotal();
});
divProducto.appendChild(nombre);
divProducto.appendChild(precio);
divProducto.appendChild(botonEliminar);
divProducto.appendChild(cantidad);
divProducto.appendChild(botonAgregar);
carrito.appendChild(divProducto);
}
productos.forEach((producto, i) => {
const botonAgregarProducto = document.getElementById(`botonAgregarProducto${i + 1}`);
botonAgregarProducto.addEventListener("click", () => {
if (producto.cantidad === 0) {
producto.cantidad++;
agregarAlCarrito(producto);
actualizarTotal();
}
});
});
document.getElementById("botonMostrarCarrito").addEventListener("click", () => {
document.querySelector(".carrito").classList.toggle("visible");
});
function finalizarCompra() {
alert("Compra finalizada");
productos.forEach(producto => producto.cantidad = 0);
while (carrito.firstChild) {
carrito.removeChild(carrito.firstChild);
}
actualizarTotal();
}
function cancelarCompra() {
productos.forEach(producto => producto.cantidad = 0);
while (carrito.firstChild) {
carrito.removeChild(carrito.firstChild);
}
actualizarTotal();
}
const botonFinalizarCompra = document.createElement("button");
botonFinalizarCompra.textContent = "Finalizar Compra";
botonFinalizarCompra.style.marginRight = "10px";
botonFinalizarCompra.addEventListener("click", finalizarCompra);
const botonCancelarCompra = document.createElement("button");
botonCancelarCompra.textContent = "Cancelar Compra";
botonCancelarCompra.addEventListener("click", cancelarCompra);
const contenedorBotones = document.createElement("div");
contenedorBotones.style.marginTop = "20px";
contenedorBotones.appendChild(botonFinalizarCompra);
contenedorBotones.appendChild(botonCancelarCompra);
totalElemento.parentNode.appendChild(contenedorBotones);
