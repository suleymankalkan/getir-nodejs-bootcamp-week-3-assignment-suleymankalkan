const fs = require('fs');
const morgan = require('morgan');
require('dotenv').config();

const logger = morgan('combined',{
  stream: fs.createWriteStream(`./${process.env.LOGFILE}`, {flags: 'a'})
});

module.exports = logger;