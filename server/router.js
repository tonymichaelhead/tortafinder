const express = require('express');
const axios = require('axios'); 
const Yelp = require('node-yelp-api-v3');
const keys = require('../env/token.js')
const mongoose = require('mongoose');
const Profile = require('../db/models.js')

const router = express.Router();
const yelp = new Yelp({
    consumer_key: keys.consumerKey,
    consumer_secret: keys.consumerSecret,
})

router.post('/search', (req, res) => {
    yelp.searchBusiness({ term: 'tortas', location: 'los angeles' })
        .then(results => {
            console.log('Recieved Search post!!')
            res.status(201).send(results);
        })
        .catch(err => {
            res.send(err);
        })
});

router.get('/favorites', (req, res) => {
    console.log('Recieved GET for favorites!!');
    Profile.find()
        .then(results => {
            res.status(200).send(results);
        })
})

router.post('/favorites', (req, res) => {
    console.log(req.body);
    //TODO: check if favorite exists in DB before adding
    let newProfile = new Profile(req.body)
    newProfile.save((err, newProfile) => {
        if (err) return console.error(err);
        console.log('successfully saved new favorite!')
    });
})

module.exports = router;

// {
//   search(term: "torta",
//          location: "los angeles") {
//     total
//     business {
//       name
//       rating
//       review_count
//       location {
//         address1
//         city
//         state
//         country
//       }
//     }
//   }
// }
