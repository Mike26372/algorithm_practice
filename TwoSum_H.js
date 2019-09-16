/* 

Hulu recently signed a contract with an airline to provide an inflight entertainment offering. Hulu will provide an API to recommend two movies that can be watched in entirety before the end of a given flight. 

[Requirements]
Let's build a function for this service that chooses two movies whose total duration will equal the exact flight length. The function should have two parameters:

* An integer `flightDuration` (in minutes)
* An object `apiResponse` containing movie names associated with their running times (in minutes)

const moviesApiResponse = {
  "flightNumber": "hulu11",
  "flightDuration": 120,
  "movies": [
      {
        "name": "The Empire Strikes Cats",
        "runtime": 110
      }, 
      {
        "name": "Lord of the Strings",
        "runtime": 300
      }, 
      {
        "name": "The Great Catsby",
        "runtime": 100,
      }, 
      {
        "name": "Cat-22",
        "runtime": 20
      }
  ]
};


[Examples]
choose2Movies(moviesApiResponse) should return ['The Great Catsby','Cat-22']

[Assumptions]
* Assume exactly two movies will be watched
* Can’t watch the same movie twice
* There will only be one correct combination

*/

const moviesApiResponse = {
  flightNumber: "hulu11",
  flightDuration: 120,
  movies: [
    {
      name: "The Empire Strikes Cats",
      runtime: 110
    },
    {
      name: "Lord of the Strings",
      runtime: 300
    },
    {
      name: "The Great Catsby",
      runtime: 100
    },
    {
      name: "Cat-22",
      runtime: 20
    }
  ]
};

function choose2Movies({ flightDuration, movies }) {
  const hash = {};

  for (let i = 0; i < movies.length; i++) {
    let { name, runtime } = movies[i];
    let remaining = flightDuration - runtime;

    if (hash[remaining]) {
      return [hash[remaining], name];
    }

    hash[runtime] = name;
  }

  return false;
}

console.log(choose2Movies(moviesApiResponse));
