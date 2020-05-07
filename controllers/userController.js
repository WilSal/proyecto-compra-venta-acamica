const Usuarios = require('../models/userModel');

exports.validateUser = (req, res) => {
  const { usuario, contrasena } = req.body;

  Usuarios.find({ usuario, contrasena })
    .then((usuario) => {
      if (usuario.length > 0) {
        res.json({
          success: true,
          message: 'Usuario autenticado',
        });
      } else {
        res.json({
          success: false,
          message: 'Usuario invalido',
        });
      }
    })
    .catch((error) => {
      res.statis(400).json({
        success: false,
        message: 'Error' + error,
      });
    });
};

exports.registerUser = async (req, res) => {
  try {
    const { nombre, usuario, contrasena, correo } = req.body;

    if (nombre || usuario || contrasena || correo) {
      await Usuarios.crearUsuario(nombre , usuario , contrasena , correo);
      res.status(201).json({
        success: true,
        message: 'Usuario registrado correctamente'
      });
    } else {
      res.status(203).json({
        success: false,
        message: 'Verificar registro',
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
