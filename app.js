const PORT = 3000;
const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

// Servir archivos estáticos desde 'public'
app.use(express.static(path.join(__dirname, 'front-end/public')));

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));


  app.get("/", (req, res) => res.redirect("/login"));
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/front-end/views/login.html"));
  });