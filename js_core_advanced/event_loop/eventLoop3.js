// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10.
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в
// секундах. Оберните все это в промис. Пусть промис выполнится успешно, если
// сгенерировано число от 1 до 5, и с ошибкой, если от 6 до 10.

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const generateRandomNumberWithDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber < 6) {
        resolve(randomNumber);
      } else {
        reject(new Error(`Random number ${randomNumber} is in range 6-10`));
      }
    }, 2000);
  });
};

generateRandomNumberWithDelay().then((randomNumber) => {
  console.log(randomNumber);
});
