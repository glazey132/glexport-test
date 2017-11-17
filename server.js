const express = require('express')
const app = express()
// var bodyParser = require('body-parser');
var db = require('./pool.js');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// module.exports = function(db) {

  app.get('/', (req, res) => res.send('Heebeejeebees!'))
  
// }

app.listen(3000, () => console.log('Example app listening on port 3000!'))
