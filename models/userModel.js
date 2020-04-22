const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tienda", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Usuarios = mongoose.model('Usuarios', {
    usuario: String,
    contrasena: String,
    nombre: String,
    correo: String,
})

module.exports = Usuarios;