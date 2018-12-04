'use strict';
const express = require('express');
let app = express();
const routes = require('./router');

// setup the routes
app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(8555, function () {
    console.log('IMDB Rating Server is listening on port 8555');
});
