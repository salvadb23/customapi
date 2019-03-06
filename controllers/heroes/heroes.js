const router = require('express').Router();

router.get('/heroes', (req, res) => {
  res.json({ "Sal": "Hey " })
})

module.exports = router;
