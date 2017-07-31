const express = require('express');
 
const router = express.Router();

router.get('/somepath', (req, res) => {
    res.send('yoyoyo somepath page');
});

module.exports = router;
