const request = require('request');
const breedName = process.argv[2]; //breed name entered by user
const url = 'https://api.thecatapi.com/v1/breeds/search/?q=' + breedName;



request(url, (error, response, body) => {

  
  //test for if request failed.
  if (response === undefined) {

    console.log('unable to fetch data.');
    console.log(error);
  } else {

    if (response.statusCode === 200 && !error) {
      const data = JSON.parse(body);
  
      // Test for if breed is not found
      if (!data[0]) {
        console.log('\n the breed was not found.');
      }
  
      console.log(`description: ${data[0]['description']}`);
    }
  }
  
});