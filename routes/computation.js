var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let randomno=Math.floor(Math.exp()*100)+1

  res.render('compute',{result:'exptential math function '+randomno+ 'is '+Math.exp(randomno)})

});

module.exports = router;
