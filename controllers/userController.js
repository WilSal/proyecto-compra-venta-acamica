const users = require("./../models/userModel");

exports.validateUser = (req, res) => {
  const {usuario, contrasena} = req.body;
  const bd_usuario = users.find(obj => obj.usuario === usuario);

  if (bd_usuario.contrasena === contrasena) {
    res.status(200).json({status: 'AUTHORIZED'});
  } else {
    res.status(401).json({status: 'UNAUTHORIZED'});
  }
};

exports.registerUser = (req, res) => {
  req.body.id = users.length + 1;
  const {nombre, usuario, contrasena, correo} = req.body;
  if (nombre || usuario || contrasena || correo) {
    users.push(req.body);
    console.log('arreglo: ',users);
    res.status(201).json({status: "CREATED"});
  } else {
    res.status(203).json({status: "NO_CREATED"});
  }
};

