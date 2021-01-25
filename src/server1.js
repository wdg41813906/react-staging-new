const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
  });
