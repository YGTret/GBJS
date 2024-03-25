"use strict";


// Генерируем массив из 5 случайных чисел от 0 до 9
const generatedArray = [];
for (let i = 0; i < 5; i++) {
    generatedArray.push(Math.floor(Math.random() * 10));
}

console.log("Сгенерированный массив:", generatedArray);

// Вычисляем сумму элементов массива
const sum = generatedArray.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма элементов массива:", sum);

// Находим минимальное значение в массиве
const min = Math.min(...generatedArray);
console.log("Минимальное значение в массиве:", min);

// Создаем новый массив, содержащий индексы элементов равных 3
const indexesOfThree = [];
generatedArray.forEach((element, index) => {
    if (element === 3) {
        indexesOfThree.push(index);
    }
});
console.log("Индексы элементов равных 3:", indexesOfThree);
