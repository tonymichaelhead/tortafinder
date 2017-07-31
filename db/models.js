const mongoose = require('mongoose');
const db = require('./config.js') 

const profileSchema = mongoose.Schema({
    username: String,
    favorites: [],
})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;