const credentials = require('../env/credentials.js');


const mongoose = require('mongoose');
//mongoose.connect(`mongodb://${credentials.user}:${credentials.password}@ds159493.mlab.com:59493/tortamigo`, {
    mongoose.connect(`mongodb://tonymichaelhead:Tonz!1988@ds159493.mlab.com:59493/tortamigo`, { 
        server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
        replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } 
    });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('DB successfully connected, bruh');
})

module.exports = db;

