"use strict";


// Функция для определения максимального числа
function findMaxNumber(number1, number2, number3) {
    let maxNumber = Math.max(number1, number2, number3); // Находим максимальное число
    console.log("Максимальное значение среди чисел " + number1 + ", " + number2 + ", " + number3 + " равно " + maxNumber + ".");
}

// Запрос у пользователя ввода трех чисел
let userInput1 = prompt("Введите первое число:");
let userInput2 = prompt("Введите второе число:");
let userInput3 = prompt("Введите третье число:");

// Преобразуем введенные значения в числа и передаем их в функцию
let number1 = parseFloat(userInput1);
let number2 = parseFloat(userInput2);
let number3 = parseFloat(userInput3);
findMaxNumber(number1, number2, number3);

