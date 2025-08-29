const express = require('express');
const router = express.Router();

const loginRoute = require('./login');

router.use('/login', loginRoute);

module.exports = router;
