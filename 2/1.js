"use strict";


let positive = parseFloat(prompt("Введите положительное число:"));
let negative = parseFloat(prompt("Введите отрицательное число:"));

if (isNaN(positive) || isNaN(negative) || positive <= 0 || negative >= 0) {
    console.log("Одно или более значений некорректно.");
} else {
    console.log("Все значения верные.");
}
