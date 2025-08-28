const express = require('express');
const router = express.Router();
const db = require('../../server/db');

// Ejemplo de endpoint
router.get('/test', (req, res) => {
  db.query('SELECT NOW() AS fecha', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la BD' });
    res.json(results);
  });
});

module.exports = router;
