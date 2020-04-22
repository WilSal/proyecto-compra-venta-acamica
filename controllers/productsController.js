const Productos = require('../models/productModel');

exports.getProducts = (req, res) => {
    // res.status(200).json(products);
};

exports.createProduct = (req, res) => {
    const {nombre, descripcion, disponible } = req.body;
    console.log("create prouct ejecutado")
    if (nombre || descripcion || disponible ) {
        const producto = new Productos({
            nombre,
            descripcion,
            disponible,
            comprador: "no",
            vendedor: "test",
          });
        res.status(201).json({ status: "CREATED", data: producto })
      } else {
        res.status(203).json({status: "NO_CREATED"});
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