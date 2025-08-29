const express = require('express');
const router = express.Router();
const db = require('../../server/db'); // <-- la conexión creada antes

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  const sql = 'SELECT * FROM usuarios WHERE usuario = ? LIMIT 1';
  db.query(sql, [username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const user = results[0];

    // Si usas contraseñas en texto plano (no recomendado):
    if (user.contrasena !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si usas contraseñas encriptadas:
    // if (!bcrypt.compareSync(password, user.password)) {
    //   return res.status(401).json({ message: 'Contraseña incorrecta' });
    // }

    res.json({ message: 'Login exitoso', user });
  });
});

module.exports = router;
