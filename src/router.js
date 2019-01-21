'use strict';
const express = require('express');
const router = express.Router();
const getData = require('./imdbQuery').getData;

router.post('/imdb', async (req, res) => {
  const title = req.body.title;

  // Check title parameter
  if (title === undefined) {
    res.status(400);
    res.send("400: Bad Request - Request has to include 'title' parameter");
    return;
  }

  const result = await getData(title, res);

  if (result != null) {
    if (result.name === "imdb api error") {
      res.status(404);
    }
    else {
      res.status(200);
    }

    res.json(result);
  }
});

module.exports = router;