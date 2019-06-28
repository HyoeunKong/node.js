var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('contacts', {
   email : req.session.email,
   loginState: req.session.loginState});
 });

module.exports = router;
