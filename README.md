# imdb-api-server

This project allows the use of the [node-imdb-api](https://github.com/worr/node-imdb-api) project as http server.
Currently only the imdb rating and genres can be extracted.

## Supported endpoints

### /api/rating

Parameter:
```{"title": "<yourMovieTitle>"``` returns the rating to the given title

### /api/genres
Parameter:
```{"title": "<yourMovieTitle>"``` returns the genres to the given title as a list


## Requirements

- An API key for omdb (get one [here](http://www.omdbapi.com/apikey.aspx))
    - You have to store it in a ```src/api.key``` file
- The packages listed in the package.json