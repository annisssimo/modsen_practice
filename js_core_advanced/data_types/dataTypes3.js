// Напишите функцию, которая принимает
// число и выводит в консоль сумму первой и
// последней цифры этого числа.

function sumFirstLastDigits(number) {
  number = number.toString();
  return parseInt(number[0]) + parseInt(number[number.length - 1]);
}

console.log(sumFirstLastDigits(123));
console.log(sumFirstLastDigits(95338));
