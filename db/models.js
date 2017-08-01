const mongoose = require('mongoose');
const db = require('./config.js') 

const profileSchema = mongoose.Schema({
  image: String,
  name: String,
  city: String,
  rating: Number,
  reviewCount: Number
})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;