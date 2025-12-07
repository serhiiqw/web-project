let numberOfFims = +prompt('How many films have you watched?', '');

let personalMovieDB = {
    count: numberOfFims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 1; i++) {
    aQuestion = prompt('The last movie you have watched?', '');
    bQuestion = +prompt('Value this film from 0 to 10', '');

    if (aQuestion != null && bQuestion != null && aQuestion != '' && bQuestion != '' && aQuestion.length < 50) {
        personalMovieDB.movies[aQuestion] = bQuestion;
        break;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('You have watched not too much movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are classic watcher');
} else if (personalMovieDB.count >= 30) {
    alert('You are a huge fan');
} else {
    alert('Error');
}

console.log(personalMovieDB);










