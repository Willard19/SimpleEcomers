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
  infoObj.nombre="Willard Javier Raudales Green";
  infoObj.email="willard@unicah.edu";
  infoObj.telefono="32144094";

  res.json(infoObj);
}

);//get info



router.get('/hook', 
function(req, res){res.render("hook",{})
}
);//get hook


router.post('/hook',
function(req,res){
var body=req.body;
console.log(body);
res.render("hook",body);


});//post hook
module.exports = router;

