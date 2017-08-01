const express = require('express');
const axios = require('axios'); 
const Yelp = require('node-yelp-api-v3');
const keys = require('../env/token.js')

const router = express.Router();
const yelp = new Yelp({
    consumer_key: keys.consumerKey,
    consumer_secret: keys.consumerSecret,
})

router.post('/search', (req, res) => {
    yelp.searchBusiness({ term: 'tortas', location: 'los angeles' })
        .then(results => {
            res.status(201).send(results);
        })
        .catch(err => {
            res.send(err);
        })
});

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
