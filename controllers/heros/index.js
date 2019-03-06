const express = require('express');
const router = express.Router();

router.use('/heros', require('./heros'));

module.exports = router;