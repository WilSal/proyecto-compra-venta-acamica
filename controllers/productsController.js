const products = require('../models/productModel');

exports.getProducts = (req, res) => {
    res.status(200).json(products);
};

exports.createProduct = (req, res) => {
    const {nombre, descripcion, disponible, comprador, vendedor} = req.body;
    req.body.id = products.length + 1;

    if (nombre || descripcion || disponible || comprador || vendedor) {
        products.push(req.body);
        console.log('arreglo: ',products);
        res.status(201).json({status: "CREATED"});
      } else {
        res.status(203).json({status: "NO_CREATED"});
      }
};

exports.purchaseProduct = (req, res) => {
    const {id, comprador} = req.body;

    if (id || comprador){
        let bd_product = products.find(obj => obj.id === id);
        bd_product.comprador = comprador;
        res.status(200).json({status: 'PURCHASED'});
    } else {
        res.status(400).json({status: 'BAD_REQUEST'});
    }
};