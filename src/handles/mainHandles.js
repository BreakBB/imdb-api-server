'use strict';
const imdb = require('imdb-api');
const fs = require("fs");

console.log("Trying to load api.key");
const apiKey = fs.readFileSync("api.key", "utf-8");
if(apiKey === ""){
    console.error("Couldn't load api.key");
    throw "api.key file not found";
}

module.exports = {
    handleRating: function(req, res, next){
        const title = req.body.title;

        imdb.get(
            {"name": title},
            {"apiKey": apiKey, "timeout": 30000}
        ).then((result) => {
            console.log("Found rating for: ", title);
            res.status(200);
            res.json(result.rating)
        }
        ).catch((err) => {
            console.log("Couldn't find rating for: ", title);
            res.status(404);
            res.json(err)
        })
    }
};