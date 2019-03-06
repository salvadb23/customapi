const mongoose = require('mongoose');
const { Schema } = mongoose;


const HeroSchema = new Schema({
  name: String,
  ability: String,
  class: String
})