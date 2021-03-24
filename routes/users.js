var express = require('express');
var router = express.Router();
var tej=0
/* GET users listing. */
router.get('/', function(req, res, next) {
  tej = tej +1;
  res.send('user accesses are:'+ tej);

});

module.exports = router;
