# imdb_api_server

This project allows the use of the [node-imdb-api](https://github.com/worr/node-imdb-api) project as http server.
Currently only the imdb rating is extracted and supported.

## Requirements

- An API key for omdb (get one [here](http://www.omdbapi.com/apikey.aspx))
    - You have to store it in a ```src/api.key``` file
- The packages listed in the package.json