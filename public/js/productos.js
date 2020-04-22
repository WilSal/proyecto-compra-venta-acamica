const nombreProducto = document.getElementById("nombreProducto");
const descripcionProducto = document.getElementById("descripcionProducto");
const crearProducto = document.getElementById("crearProducto");
const listaProductos = document.getElementById("listaProductos");

function enviarProducto(producto) {
  fetch("http://localhost:3002/productos", {
    method: "post",
    body: JSON.stringify(producto),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function cargarProductos() {
  fetch("http://localhost:3002/productos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      actualizarProductos(data.data);
    });
}

function actualizarProductos(ProductData) {
  let child = document.createElement("div");

  for (let i = 0; i < ProductData.length; i++) {
    child.innerHTML += `
            <div class="products_container">
                <div class="product_name">
                    <span id="elemento">${ProductData[i].nombre}</span>
                </div>
                <div class="product_description">${ProductData[i].descripcion}</div>
            </div>`;
            
    listaProductos.appendChild(child);
  }
}

crearProducto.addEventListener("click", function () {
  var producto = {
    nombre: nombreProducto.value,
    descripcion: descripcionProducto.value,
    disponible: true,
    comprador: null,
    vendedor: null,
  };
  enviarProducto(producto);
});

window.addEventListener("load", function () {
  cargarProductos();
});
