#!/usr/bin/node
// prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const url = process.argv[2];

request.get(url, response);

function response (err, response, body) {
  if (err) {
    console.error(err);
  } else {
    let count = 0;
    const resultsJson = JSON.parse(body).results;
    // console.log(resultsJson);
    for (const film of resultsJson) {
      // console.log(film.characters);
      for (const character of film.characters) {
        if (character.includes('18')) {
          count++;
          break;
        }
      }
    }
    console.log(count);
  }
}
