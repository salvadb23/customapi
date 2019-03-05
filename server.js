const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;


const PORT = process.env.PORT || 3000;
//Initiate our app
const app = express();

//Configure our app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

//Configure Mongoose
mongoose.connect('mongodb://test:testpassword1@ds147073.mlab.com:47073/bew');
mongoose.set('debug', true);

require('./models/Users');
require('./config/passport');
app.use(require('./controllers'));


app.get('/', (req, res) => {
  res.send('You connected to me')
})

app.get('/api/users', (req, res) => {
  res.json({ "message": "hey" })
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`));