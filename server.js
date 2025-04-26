const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Bienvenido a la API para administrar la lista de tareas pendientes"
  );
});

app.listen(port, () => {
  console.log(`Servidor corriendo en localhost:${port}`);
});
