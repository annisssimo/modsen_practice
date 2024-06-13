// Напишите код, в котором попытаетесь обратиться к переменной до её объявления с
// использованием var, let и const. Определите, какие переменные допускают такое
// использование, а какие нет.

console.log(v); // допускается, результат - undefined
var v = 1;

console.log(l); // ReferenceError: Cannot access 'l' before initialization
let l = 2;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 3;
