var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  req.session.regenerate((err)=>{
    req.session;
    console.log("세션ID=",req.sessionID);
    req.session.email = req.body.email;
    req.session.name = req.body.name;
    const result={msg:`${req.body.name}님 가입되셨습니다.`};
    res.json(JSON.stringify(result));
   // console.log(req.session.email);
  });
});

module.exports = router;
