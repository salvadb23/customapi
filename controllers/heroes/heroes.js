const router = require('express').Router();
const mongoose = require('mongoose');
const auth = require('../auth');
const Hero = mongoose.model("Hero")
const isAuthenticated = require('../../config/middleware/isAuthenticated');


// TODO: Was trying to associate heroes with users
router.post('/heroes', auth.required, (req, res, next) => {
  const { body: { hero } } = req;

  const newHero = new Hero(hero);

  return newHero.save()
    .then(() => res.json({ hero: newHero }))
    .catch(err => res.json({ err }))
});

router.get('/heroes', auth.required, (req, res, ) => {
  console.log('hero')
})

router.delete('/heroes/:id', auth.required, (req, res) => {
  const { id } = req.params;
  Hero.findByIdAndDelete(id).then(() => {
    res.send('Deleted hero!')
  }).catch(err => {
    res.send(err)
  })
})

router.put('/heroes/:id', auth.required, (req, res) => {
  const { id } = req.params;
  const { name, ability, role } = req.body;

  Hero.findOneAndUpdate(id)
    .then((hero) => {
      hero.name = name || hero.name;
      hero.ability = ability || hero.ability;
      hero.role = role || hero.role;
      res.json({ hero })
      hero.save()
    })
    .catch(err => {
      res.json({ err })
    })
});

router.get('/heroes/:id', auth.required, (req, res) => {
  const { id } = req.params;

  Hero.findById(id).then((hero) => {
    res.json({ hero })
  })
})

router.get('/heroes', auth.required, (req, res) => {
  Hero.find().then((heroes) => {
    res.json({ heroes });
  })
    .catch((err) => {
      res.json({ err });
    });
});


module.exports = router;
