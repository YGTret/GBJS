"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7];

// Изменяем массив arr согласно условиям
arr.splice(2, 3, 100);

console.log(arr); // Выведет: [1, 2, 100, 6, 7]
