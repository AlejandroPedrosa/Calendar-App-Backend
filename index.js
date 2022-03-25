const express = require("express");
const { dbConection } = require("./database/config");
const cors = require("cors");

require("dotenv").config();
//Crear servidor express
const app = express();

//Base de datos
dbConection();

//CORS
app.use(cors());

//Directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log("servidor en port 4000");
});