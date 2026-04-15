const productos = [
  { id: 1, nombre: "Paracetamol", precio: 5 },
  { id: 2, nombre: "Ibuprofeno", precio: 8 },
  { id: 3, nombre: "Vitamina C", precio: 12 }
];

const contenedor = document.getElementById("productos");
const carrito = [];

productos.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${p.nombre} - S/ ${p.precio}</p>
    <button onclick="agregar(${p.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});

function agregar(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";
  carrito.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    lista.appendChild(li);
  });
}