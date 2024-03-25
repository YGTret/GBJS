"use strict";


let number = parseInt(prompt("Введите целое число:"));

let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let units = number % 10;

console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);
