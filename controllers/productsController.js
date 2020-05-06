const Productos = require('../models/productModel');

exports.getProducts = (req, res) => {
  Productos.find()
    .then((productos) => {
      res.json({
        success: true,
        message: 'Productos Disponibles',
        data: productos,
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: error,
      });
    });
};

exports.createProduct = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      precio,
      disponible,
      comprador,
      vendedor,
    } = req.body;

    if (nombre || descripcion || precio || disponible) {
      const producto = new Productos({
        nombre,
        descripcion,
        precio,
        comprador,
        vendedor,
      });
      await producto.save();
      res.status(201).json({
        success: true,
        message: 'Producto creado correctamente',
        data: producto,
      });
    } else {
      res.status(203).json({
        success: false,
        message: 'Verificar producto',
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};