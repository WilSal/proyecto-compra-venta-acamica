const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRouter = require("./routes/userRoutes");

app.use(bodyParser.json());

app.use("/users", userRouter);

const port = 3000;
app.listen(port, () => {
  console.log("Servidor ejecutado");
});
