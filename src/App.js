const express = require('express');

//Loading env variables
require('dotenv').config();

const app = express();

// Define Routers
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

app.use('/', indexRouter);
app.use('/posts', postsRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}!`),
);