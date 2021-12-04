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
  res.send('POST /posts');
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
  res.send(`DELETE /posts/${req.params.id}`);
});

module.exports = app;