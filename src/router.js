'use strict';
const express = require('express');
const router = express.Router();
const getData = require('./imdbQuery').getData;

router.post('/imdb', async (req, res) => {
  const result = await getData(req.body.title, res);

  if(result != null){
    res.status(200);
    res.json(result);
  }
});

module.exports = router;