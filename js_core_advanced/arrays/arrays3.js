// Напишите функцию, которая принимает
// массив с числами и находит сумму квадратов
// элементов этого массива.

function sumSquares(numbers) {
  return numbers
    .map((el) => el * el)
    .reduce((sum, current) => sum + current, 0);
}

console.log(sumSquares([1, 2, 3, 4]));
