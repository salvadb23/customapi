const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;


const PORT = process.env.PORT || 5000;


//Initiate our app
const app = express();

//Configure our app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

//Configure Mongoose
mongoose.connect(process.env.URL);
mongoose.set('debug', true);

require('./models/Users');
require('./models/Hero');
require('./config/passport');
// app.use(require('./controllers'));
app.use('/api', require('./controllers/api/index'));
app.use('/api', require('./controllers/heroes/heroes'));


app.listen(PORT, () => console.log(`Server running on ${PORT}`));