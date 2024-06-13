// 3 вариант
// Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней.
// Используйте строгий режим.

'use strict';

function countVowels(string) {
  const vowelRegex = /[aeoiuy]/gi;
  const matches = string.match(vowelRegex);
  return matches ? matches.length : 0;
}

console.log(countVowels('dtlf')); //0
console.log(countVowels('HI foo!')); //3
