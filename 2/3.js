"use strict";


let dayNumber = parseInt(prompt("Введите целое число от 1 до 31:"));

if (dayNumber >= 1 && dayNumber < 32) {
    let decade;
    if (dayNumber <= 10) {
        decade = 1;
    } else if (dayNumber <= 20) {
        decade = 2;
    } else {
        decade = 3;
    }
    console.log(`Число ${dayNumber} попадает в ${decade} декаду месяца.`);
} else {
    console.log("Неверное значение");
}
