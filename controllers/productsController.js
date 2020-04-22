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
  const { nombre, descripcion, precio, disponible, comprador, vendedor } = req.body;
  
  if (nombre || descripcion ||  precio || disponible) {
    const producto = new Productos({
      nombre,
      descripcion,
      precio,
      comprador,
      vendedor,
    });
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