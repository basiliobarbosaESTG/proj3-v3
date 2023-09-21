var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/user.controllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register);

module.exports = router;
