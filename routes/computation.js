var express = require('express');
const url = require('url');
var router = express.Router();
const querystring = require('querystring');
let alert = require('alert');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var a = req.query.value; 

  res.send('ceil applied to: ' + a + " is " + Math.ceil(a));
});

module.exports = router;

