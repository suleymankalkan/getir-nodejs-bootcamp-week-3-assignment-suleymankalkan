const app = require('express')();

// GET	/posts
app.get('/', (req, res) => {
    res.send('GET /posts');
});

// GET	/posts/1
app.get('/:id', (req, res) => {
    res.send(`GET /posts/${req.params.id}`);
});

// GET	/posts/1/comments
app.get('/:id/comments', (req, res) => {
  res.send(`GET /posts/${req.params.id}/comments`);
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