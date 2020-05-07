const sequelize = require('../dataBase')

const Producto = {};

Producto.crearUsuario = async (nombre , usuario , contrasena , correo) => {
    try {
        const result = await sequelize.query('INSERT INTO Usuario (nombre , usuario , contrasenia , correo) VALUES (?,?,?,?)', {
            replacements: [nombre , usuario , contrasena , correo]
          });
          return result;        
    } catch (error) {
        console.log('ERROR', error);
    }
};

module.exports = Producto;