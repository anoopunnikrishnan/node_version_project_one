var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello v1.0 GET API for api_one');
});

router.get('/aa', function(req, res, next) {
  res.send('Hexxxxxxxxxxxxapi_one');
});

router.post('/', function(req, res, next) {
  res.send('Hello v1.0 POST API for api_one');
});

module.exports = router;
