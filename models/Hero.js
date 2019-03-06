const mongoose = require('mongoose');

const { Schema } = mongoose;


const HeroSchema = new Schema({
  name: String,
  ability: String,
  // owner: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  role: String,
});

mongoose.model('Hero', HeroSchema);
