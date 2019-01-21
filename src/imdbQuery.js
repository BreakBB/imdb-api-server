'use strict';
const imdb = require('imdb-api');
const fs = require("fs");

console.log("Trying to load api.key");
const apiKeys = fs.readFileSync("api.key", "utf-8").split(/\r?\n/);
if (apiKeys.length === 0) {
  console.error("Couldn't load api.key");
  throw "api.key file not found";
}
let countAPIKey = 0;
let apiKey = apiKeys[countAPIKey];

let requestCounter = 0;

module.exports = {
  getData: async function getData(title) {
    try {
      const result = await imdb.get(
        {"name": title},
        {"apiKey": apiKey, "timeout": 30000});

      console.log(requestCounter + " - Found data entry for:", title);
      return result;
    }
    catch (err) {
      console.error(requestCounter + " - Couldn't find data entry for:", title);

      if (err.statusCode === 401) {
        if (apiKeys.length > countAPIKey) {
          console.log("Request limit reached. Changing API key");
          countAPIKey += 1;
          apiKey = apiKeys[countAPIKey];
        }
        else {
          console.log("Request limit reached. Out of API keys");
          process.exit();
        }
      }
      return err;
    }
    finally {
      requestCounter++;
    }
  }
};