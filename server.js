const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./config/postgres");
const apiRouter = require("./routes");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Bienvenido a la API para administrar la lista de tareas pendientes"
  );
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en localhost:${port}`);
});

dbConnection();
