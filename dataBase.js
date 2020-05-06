const mongoose = require('mongoose');

const URI =
  'mongodb+srv://acamica:acamica@cluster0-kzxek.azure.mongodb.net/acamicaTiendaDb?retryWrites=true&w=majority';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectada a la Base de Datos Exitosamente'))
  .catch((err) => console.log(err));
