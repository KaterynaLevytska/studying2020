/*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = prompt('How many films have you watched?', '5');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

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
/*let i = 1;
while (i < 3) {
    const firstQuestion = prompt('Which was the last movie you watched?', 'Serfdom');
    const secondQuestion = prompt('How much will you appreciate it?', '7.8');

    if (firstQuestion != '' && secondQuestion != '' && firstQuestion != null && secondQuestion != null && firstQuestion.length < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('Done!');
    } else {
        console.log('Error');
        i--;
    }
    i++;
}*/

/*let i = 1;
do {
    const firstQuestion = prompt('Which was the last movie you watched?', 'Serfdom');
    const secondQuestion = prompt('How much will you appreciate it?', '7.8');

    if (firstQuestion != '' && secondQuestion != '' && firstQuestion != null && secondQuestion != null && firstQuestion.length < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('Done!');
    } else {
        console.log('Error');
        i--;
    }
    i++;
} while (i < 3); */

if (personalMovieDB.count < 10) {
    console.log("You haven't seen enough movies!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classoc viewer!");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a movie buff!");
} else {
    console.log("An error occurred");
}

console.log(personalMovieDB);