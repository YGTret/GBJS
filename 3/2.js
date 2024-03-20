"use strict";


// Функция для вычета налога
function calculateSalaryWithTax(number) {
    let tax = number * 0.13; // Вычисляем налог (13%)
    let salaryAfterTax = number - tax; // Вычитаем налог из зарплаты
    console.log("Размер заработной платы за вычетом налогов равен " + salaryAfterTax + ".");
}

// Запрос у пользователя ввода числа
let userInput = prompt("Введите число:");

// Проверка, является ли введенное значение числом
if (!isNaN(userInput)) {
    let number = parseFloat(userInput); // Преобразуем введенное значение в число
    calculateSalaryWithTax(number); // Вызываем функцию для вычета налога
} else {
    console.log("Значение задано неверно.");
}
