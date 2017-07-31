const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tortas');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('DB successfully connected, bruh');
})

module.exports = db;

