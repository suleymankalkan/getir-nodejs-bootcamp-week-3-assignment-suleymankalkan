const app = require('express')();
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.get('/', (req, res) => {
  const username = req.body.username;
 
  if(typeof username !== 'undefined'){
    jwt.sign({username}, process.env.SECRETKEY, (err,token)=>{
      if(err)
        res.sendStatus(500) // Send internal server error
      
      res.json({
          token
      })
    })
  } else {
    res.sendStatus(400); // if username is not defined, send 400 - bad request 
  }
});

module.exports = app;