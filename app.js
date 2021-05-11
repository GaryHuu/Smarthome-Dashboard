const tempItem = document.querySelector('#temp');
const humItem = document.querySelector('#hum');
const cityItem = document.querySelector('#city');
const dt = new Date();
console.log(dt);
fetch(
  'http://api.openweathermap.org/data/2.5/weather?q=ho%20chi%20minh&appid=cf26e7b2c25b5acd18ed5c3e836fb235'

  // 'http://api.openweathermap.org/data/2.5/weather?q=ha%20noi&appid=cf26e7b2c25b5acd18ed5c3e836fb235'
).then(async (response) => {
  const data = await response.json();
  const tempValue = Math.round(data.main.temp - 273);
  tempItem.innerHTML = tempValue;
  const humValu = Math.round(data.main.humidity);
  humItem.innerHTML = `${humValu}%`;
  cityItem.innerHTML = `${data.name}`;
});
