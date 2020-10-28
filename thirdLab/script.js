/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watched?', '5');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched?', '5');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const firstQuestion = prompt('Which was the last movie you watched?', 'Serfdom');
        const secondQuestion = prompt('How much will you appreciate it?', '7.8');
    
        if (firstQuestion != '' && secondQuestion != '' && firstQuestion != null && secondQuestion != null && firstQuestion.length < 50) {
                personalMovieDB.movies[firstQuestion] = secondQuestion;
                console.log('Done!');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You haven't seen enough movies!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classoc viewer!");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are a movie buff!");
    } else {
        console.log("An error occurred");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
 if (!hidden) {
    console.log(personalMovieDB);
 }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`What is your favorite movie genre ${i}?`, '');
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();
