'use strict';
const express = require('express');
const router = express.Router();

// IMDB routes
const handles = require('./handles/mainHandles');
router.post('/rating', handles.handleRating);

router.post('/genres', handles.handleGenres);

module.exports = router;