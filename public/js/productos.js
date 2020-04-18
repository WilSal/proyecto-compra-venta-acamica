const nombreProducto = document.getElementById("nombreProducto");
const descripcionProducto = document.getElementById("descripcionProducto");
const crearProducto = document.getElementById("crearProducto");

crearProducto.addEventListener("click", function() {
    var producto = { nombre: descripcionProducto.value, descripcion: descripcionProducto.value, disponible: true };
    crearProducto(crearProducto)
})

function crearProducto() {
    fetch("http://localhost:3001/productos", {
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