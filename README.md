# imdb-api-server

This project allows the use of the [node-imdb-api](https://github.com/worr/node-imdb-api) project as http server. It forwards the request and response send to the given endpoint.

## Supported endpoints

### POST /api/imdb

Parameter:
```{"title": "<yourMovieTitle>}"``` returns the data to the given title or an error if no data was found.


## Requirements

- One or more API keys for the Open Movie Database (get one [here](http://www.omdbapi.com/apikey.aspx))
    - You have to store it in a ```src/api.key``` file
- The packages listed in the package.json