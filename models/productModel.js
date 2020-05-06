const mongoose = require("mongoose");

const Productos = mongoose.model('Productos', {
    nombre: String,
    descripcion: String,
    precio: Number,
    disponible: Boolean,
    comprador: String,
    vendedor: String,
})

module.exports = Productos;