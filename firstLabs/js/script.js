const numberOfFilms = prompt('How many films have you watched?', '5'); 

const personalmovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt('Which was the last movie you watched?', 'Serfdom');
const secondQuestion = prompt('How much will you appreciate it?', '7.8');
const thirdQuestion = prompt('Which was the last movie you watched?', 'Serfdom');
const fourthQuestion = prompt('How much will you appreciate it?', '7.8');

personalmovieDB.movies[firstQuestion] = secondQuestion;
personalmovieDB.movies[thirdQuestion] = fourthQuestion;

console.log(personalmovieDB);