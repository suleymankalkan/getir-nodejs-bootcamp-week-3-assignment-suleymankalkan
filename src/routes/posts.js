const app = require('express')();
const posts = require('../models/posts')

// GET	/posts
app.get('/', (req, res) => {
    res.json(posts);
});

// GET	/posts/1
app.get('/:id', (req, res) => {
    let message = posts.find( p => p.id == req.params.id)
    message ? res.send(message) : res.status(404).send('Not found');
});

// POST	/posts
app.post('/', (req, res) => {
  let {userId, id, title, body} = req.body;
  let isDuplicate = posts.find( p => p.id == req.body.id);

  if(isDuplicate){
    res.status(409).send('exists');
  } else {
    posts.push({userId, id, title, body});
    res.status(201).json({userId, id, title, body});
  }
});

// PUT	/posts/1
app.put('/:id', (req, res) => {
  res.send(`PUT /posts/${req.params.id}`);
});

// PATCH	/posts/1
app.patch('/:id', (req, res) => {
  res.send(`PATCH /posts/${req.params.id}`);
});

// DELETE	/posts/1
app.delete('/:id', (req, res) => {
  let isExists = posts.find( p => p.id == req.params.id);
  if(isExists){
    let removePost = posts.pop(req.params.id);
    res.json(removePost)
  } else {
    res.sendStatus(404);
  }
});

module.exports = app;