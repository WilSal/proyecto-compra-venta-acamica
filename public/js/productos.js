const nombreProducto = document.getElementById("nombreProducto");
const descripcionProducto = document.getElementById("descripcionProducto");
const crearProducto = document.getElementById("crearProducto");
const uploadedProducts = document.getElementById("uploaded-products");


const productosMock = [{
        id: 1,
        nombre: "Iphone 8",
        descripcion: "Espectacular Iphone 8",
        disponible: true,
        comprador: null,
        vendedor: "cris18",
    },
    {
        id: 2,
        nombre: "Iphone 7",
        descripcion: "Espectacular Iphone 7",
        disponible: true,
        comprador: null,
        vendedor: "cris18",
    },
    {
        id: 3,
        nombre: "Iphone 6",
        descripcion: "Espectacular Iphone 6",
        disponible: true,
        comprador: null,
        vendedor: "cris18",
    },
    {
        id: 4,
        nombre: "Iphone 5",
        descripcion: "Espectacular Iphone 5",
        disponible: true,
        comprador: null,
        vendedor: "cris18",
    },
];

function updateProductSection(ProductData) {
    console.log(uploadedProducts)

    let child = document.createElement('div');
    child.innerHTML = "Contenido para productos";

    for (let i = 0; i < ProductData.length; i++) {
        child.innerHTML += `
            <div class="products_container">
                <div class="product_name">
                    <span id="elemento">${ProductData[i].nombre}</span>
                </div>
                <img src="https://www.apple.com/co/iphone/" alt="iphone" height="42" width="42">
                <div class="product_description">${ProductData[i].descripcion}</div>
        
                <div class="product_description">${ProductData[i].vendedor}</div>
            </div>`;
        uploadedProducts.appendChild(child)

    }
}
updateProductSection(productosMock);


crearProducto.addEventListener("click", function() {
    var producto = {
        nombre: nombreProducto.value,
        descripcion: descripcionProducto.value,
    };
    enviarProducto(producto);
});

function enviarProducto(producto) {
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