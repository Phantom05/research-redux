var express = require('express');
var router = express.Router();
var path = require('path');
var exec = require('child_process').exec;
var execFile = require('child_process').execFile;
var fs = require('fs');
var util = require('util');

var log = console.log;
/**
 * ROUTER: Login
 */
router.post('/login', function(req, res, next) {
  console.clear();
  console.log('login');
  console.log(req.body);
  const {email,password} = req.body;
  const token ="rgkjawgkjh34kj34kh56k3q4h6kjq2346k34";
  if(password == '123j123J'){
    res.json({
      result:1,
      token,
      profile:{
        name:"Chris Brown",
      }
    })
  }else{
    res.json({result:2})
  }
});


router.post('/logout', function(req, res, next) {
  console.log('logout');
  res.json({result:1})
});

router.post('/token', function(req, res, next) {
  console.log('token');
  console.log(req.body);
  const {token} = req.body;
  res.json({
    result:1,
    token,
    profile:{
      name:"Chris Brown",
    }
  })
});

module.exports = router;




