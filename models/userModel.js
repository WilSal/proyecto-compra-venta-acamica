const mongoose = require("mongoose");

const Usuarios = mongoose.model('Usuarios', {
    usuario: String,
    contrasena: String,
    nombre: String,
    correo: String,
})

module.exports = Usuarios;