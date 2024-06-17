// Напишите функцию, которая одновременно извлекает данные из нескольких API и
// возвращает объединенный результат, используя Promises

const getDataFromAPIs = async (urls) => {
  return Promise.all(urls.map(async (url) => (await fetch(url)).json()));
};

const testApp = async () => {
  let urls = [
    'https://catfact.ninja/fact',
    'https://official-joke-api.appspot.com/random_joke',
  ];
  const apiResponses = await getDataFromAPIs(urls);
  console.log(apiResponses);
};

testApp();
