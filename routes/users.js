var express = require('express');
var router = express.Router();
const controllers = require('../controllers/usersControllers')

router.post('/register', controllers.register) 
router.post('/login', controllers.login)

module.exports = router;
