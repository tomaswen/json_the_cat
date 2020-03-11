const name = String(process.argv.slice(2));
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, function(error, response, body) {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    if (body !== '[]') {
      const data = JSON.parse(body);
      console.log(data[0].description);
    } else {
      console.log('Breed Not Found');
    }
  } else {
    console.log(`Error ${response.statusCode}: ${response.statusMessage}`);
  }
});