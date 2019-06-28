var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
 const result={msg:''};
 console.log("세션ID(login.js)",req.sessionID);
 /* console.log(req.session.email);
 console.log(req.body.email); */
 if(req.session.email === req.body.email){
     req.session.loginState = true;
     res.redirect("/");
     //result.msg=`${req.session.email}님 로그인되셨습니다.`;
 }else{
    res.json(JSON.stringify({msg:"다시 로그인"}));
 }

});

module.exports = router;
