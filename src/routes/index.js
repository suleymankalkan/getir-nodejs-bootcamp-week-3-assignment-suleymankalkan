const app = require('express')();

app.get('/', (req, res) => {
    res.send('Getir Week 3 Assigment')
});

module.exports = app;