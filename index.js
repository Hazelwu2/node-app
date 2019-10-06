var express = require('express');
var app = express()

app.get('/', function(req, res) {
    res.send('Hazel World');
})

app.listen(process.env.PORT || 3000)

module.exports = app;