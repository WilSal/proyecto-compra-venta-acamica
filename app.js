const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRouter = require("./routes/userRoutes");

app.use(bodyParser.json());

app.use((_, res, next) => { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header( "Access-Control-Allow-Headers", 
  "Origin, X-Requested-With, Content-Type, Accept" );
  next(); }); 

app.use("/usuarios", userRouter);

const port = 3002;
app.listen(port, () => {
  console.log("Servidor ejecutado");
});
