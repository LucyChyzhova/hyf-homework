/*Movies exercise
This exercise is repetition of array functions. you dont have to use chaining or anything fancy. 
Just fetch the movies and use the correct array function to get the following movies:

Fetch movies from api:

Create an array of bad movies
Creat an array of bad movies since year 2000*/

const urlMovies =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetch(urlMovies)
  .then((res) => res.json())
  .then((result) => {
    //console.log("all movies", result);

    const badMovies = result.filter((movie) => movie.rating < 4);
    const badMovieSince2000 = badMovies.filter((movie) => movie.year >= 2000);
    
    console.log("bad movies");
    console.log(badMovies);
    console.log("bad movies since year 2000");
    console.log(badMovieSince2000);
  });
