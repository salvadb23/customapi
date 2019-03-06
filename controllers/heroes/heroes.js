const mongoose = require('mongoose');
const router = require('express').Router();

router.get('/api/heroes', (res, req) => {
  res.json({ Sal: 'I am a hero!!!!' });
});


