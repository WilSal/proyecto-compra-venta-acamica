const Productos = require("../models/productModel");

exports.getProducts = (req, res) => {
  Productos.find().then((productos) => {
    res.json({
      success: true,
      message: "Productos Disponibles",
      data: productos,
    });
  });
};

exports.createProduct = (req, res) => {
  const { nombre, descripcion, disponible } = req.body;
  
  if (nombre || descripcion || disponible) {
    const producto = new Productos(req.body);
    producto.save();
    res.status(201).json({
      success: true,
      message: "Producto creado correctamente",
      data: producto,
    });
  } else {
    res.status(203).json({
      success: false,
      message: "Verificar producto",
    });
  }
};

exports.purchaseProduct = (req, res) => {
  // const {id, comprador} = req.body;
  // if (id || comprador){
  //     let bd_product = products.find(obj => obj.id === id);
  //     bd_product.comprador = comprador;
  //     res.status(200).json({status: 'PURCHASED'});
  // } else {
  //     res.status(400).json({status: 'BAD_REQUEST'});
  // }
};