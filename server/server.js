const express = require('express');
// let router = require('./router');
const parser = require('body-parser');
const router = require('./router.js')
const path = require('path'); 

const port =  3000;

let app = express();
app.use(express.static(path.join(__dirname, '../output')));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/', router);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
