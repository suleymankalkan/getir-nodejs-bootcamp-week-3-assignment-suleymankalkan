const express = require('express');
const auth = require('./middlewares/auth');

//Loading env variables
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define Routers
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const loginRouter = require('./routes/login');

// Unauthorized pages
app.use('/login', loginRouter); // Login page before auth

app.use(auth); // Auth check

// Authorized pages
app.use('/', indexRouter);
app.use('/posts', postsRouter);


app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}!`),
);