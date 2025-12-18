
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('How many films have you watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you watched?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            aQuestion = prompt('The last movie you have watched?', '').trim();
            bQuestion = +prompt('Value this film from 0 to 10', '');

            if (aQuestion != null && bQuestion != null && aQuestion != '' && bQuestion != '' && aQuestion.length < 50) {
                personalMovieDB.movies[aQuestion] = bQuestion;
            } else {
                alert("Incorrect input, try again");
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (ppersonalMovieDB.count < 10) {
            alert('You have watched not too much movies');
        } else if (ppersonalMovieDB.count >= 10 && ppersonalMovieDB.count < 30) {
            alert('You are classic watcher');
        } else if (ppersonalMovieDB.count >= 30) {
            alert('You are a huge fan');
        } else {
            alert('Error');
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genres ${i}`);
            if (genre == '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, number) => {
            console.log(`Favorite genre #${number + 1} - it's ${item}`);
        });
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
}

















