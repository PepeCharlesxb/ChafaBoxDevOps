const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'front/public')));

// Rutas API
const apiRoutes = require('./back/routes/apis/index'); // <-- Importación correcta
app.use('/api', apiRoutes);

// Ruta para vista principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/views/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
