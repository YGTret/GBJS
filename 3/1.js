"use strict";

// Функция для возвода числа в куб
function cube(number) {
    return number ** 3;
}

// Пример вызова функции
let number = 5; // Пример числа, которое будем передавать в функцию
let result = cube(number);
console.log("Число " + number + " в кубе равно: " + result);
