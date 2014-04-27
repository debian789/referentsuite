var express   = require('express');
var router    = express.Router();
var fs        = require('fs');
var  baseData = fs.readFileSync('./data.json').toString();

var data = JSON.parse(baseData);
/* GET users listing. */
router.get('/', function(req, res) {
  res.send(data);
});

router.post('/',function(req, res){
	data.push(req.body);
	res.send(200,{status:"Ok"});
	//debugger;
});


module.exports = router;
