'use strict';
const imdb = require('imdb-api');
const fs = require("fs");

console.log("Trying to load api.key");
const apiKey = fs.readFileSync("api.key", "utf-8");
if(apiKey === ""){
    console.error("Couldn't load api.key");
    throw "api.key file not found";
}

async function getData(title, res){
    // Check title parameter
    if(title === undefined){
        res.status(400);
        res.send("400: Bad Request - Request has to include 'title' parameter");
        return null;
    }

    try{
        const result = await imdb.get(
            {"name": title},
            {"apiKey": apiKey, "timeout": 30000});

        console.log("Found data entry for: ", title);
        return result;
    }
    catch (err) {
        console.log("Couldn't find data entry for: ", title);
        // result is "err"
        res.status(404);
        res.json(err);
        return null;
    }
}

module.exports = {
    handleRating: async function(req, res){
        const result = await getData(req.body.title, res);

        if(result != null){
            res.status(200);
            res.json(result.rating);
        }
    },
    handleGenres: async function(req, res){
        const result = await getData(req.body.title, res);

        if(result != null){
            res.status(200);
            const genres = result.genres.split(', ');
            res.json(genres);
        }
    }
};