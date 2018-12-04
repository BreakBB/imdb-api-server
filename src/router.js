'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// IMDB routes
const handles = require('./handles/mainHandles');
router.post('/imdb', bodyParser.json(), handles.handleRating);


module.exports = router;