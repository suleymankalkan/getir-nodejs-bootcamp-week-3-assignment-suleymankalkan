const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined'){
    // Verify the token
    jwt.verify(bearerHeader, process.env.SECRETKEY, (err,authData)=>{
      if(!err) {
          //res.setHeader('authData', authData);
          next();
      } else {
        res.sendStatus(403);
      }
    });
  } else {
    res.sendStatus(403);
  }
}

module.exports = verifyToken;