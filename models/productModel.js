const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tienda", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Productos = mongoose.model('Productos', {
    nombre: String,
    descripcion: String,
    disponible: Boolean,
    comprador: String,
    vendedor: String,
})

module.exports = Productos;