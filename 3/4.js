"use strict";


// Функция сложения
function sum(a, b) {
    return a + b;
}

// Функция разности
function difference(a, b) {
    return a > b ? a - b : b - a;
}

// Функция умножения
function multiplication(a, b) {
    return a * b;
}

// Функция деления
function division(a, b) {
    return b !== 0 ? a / b : 0;
}

// Пример вызова функций
console.log(sum(2, 6)); // Выведет 8
console.log(difference(6, 2)); // Выведет 4
console.log(multiplication(2, 6)); // Выведет 12
console.log(division(6, 2)); // Выведет 3
