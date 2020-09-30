var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info',function(req,res)
{
  var infoObj={}; //infoObj=array(); en php
  infoObj.cuenta="0801199807811";
  infoObj.nombre="Willard Javier Raudales Alvarenga";
  infoObj.email="willard@unicah.edu";
  infoObj.telefono="32144094";
  res.json(infoObj);
}

);//get info
module.exports = router;

