// Напишите функцию, которая одновременно извлекает данные из нескольких API и
// возвращает объединенный результат, используя Promises

const getDataFromAPIs = (urls) => {
  const promisesArray = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  return Promise.all(promisesArray).then((combinedResults) =>
    console.log(combinedResults)
  );
};

let urls = [
  'https://catfact.ninja/fact',
  'https://official-joke-api.appspot.com/random_joke',
];

getDataFromAPIs(urls);
