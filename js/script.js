
const numberOfFims = +prompt('How many films have you watched?', '');
const secondQuestion = prompt('The last movie you have watched?', '');
    thirdQuestion = +prompt('Value this film from 0 to 10', '');
    lastMovieAnswer = secondQuestion;
    lastMovieValueAnswer = thirdQuestion;

let personalMovieDB = {
    count: numberOfFims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

personalMovieDB.movies[lastMovieAnswer] = lastMovieValueAnswer;








