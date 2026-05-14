document.addEventListener("DOMContentLoaded", () => {

  const productos = [
    { id: 1, nombre: "Paracetamol", precio: 5 },
    { id: 2, nombre: "Ibuprofeno", precio: 8 },
    { id: 3, nombre: "Vitamina C", precio: 12 },
    { id: 4, nombre: "shampoo", precio: 12 },
    { id: 5, nombre: "Suplementos vitaminicos", precio: 70 },
    { id: 6, nombre: "calcio", precio: 12 },
    { id: 7, nombre: "Vitamina D", precio: 15 },
    { id: 8, nombre: "sueros", precio: 30 },
    { id: 9, nombre: "desodorantes", precio: 10 },
    { id: 10, nombre: "guantes quirurgicos", precio: 8 },
    { id: 11, nombre: "pasta dental", precio: 12 },
    { id: 12, nombre: "pañales", precio: 50 }
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

  window.agregar = function(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    mostrarCarrito();
  };

  window.eliminar = function(id) {
    const index = carrito.findIndex(p => p.id === id);
    if (index !== -1) {
      carrito.splice(index, 1);
    }
    mostrarCarrito();
  };

  function mostrarCarrito() {
    const lista = document.getElementById("carrito");
    lista.innerHTML = "";

    let total = 0;

    carrito.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${p.nombre} - S/ ${p.precio}
        <button onclick="eliminar(${p.id})">Eliminar</button>
      `;
      lista.appendChild(li);

      total += p.precio;
    });

    const totalElemento = document.createElement("p");
    totalElemento.textContent = "Total: S/ " + total;
    totalElemento.style.fontWeight = "bold";
    lista.appendChild(totalElemento);
  }

});