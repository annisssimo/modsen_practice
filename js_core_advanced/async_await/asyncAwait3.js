// Напишите функцию, которая параллельно
// загружает данные с нескольких удаленных
// серверов, используя Promise.all в сочетании с
// async/await.

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
