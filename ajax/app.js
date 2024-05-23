// fetch : Based on Promises and more cleaner

const url = './api/people.json'

/* ---
fetch(url)
  .then(response => {
    // response object: It doesn't directly get us the data but some useful data
    // useful properties and methods : We require json() method
    // convert response to  JSON data with json() method
    // It returns a promise as well, so we'll require another .then() to handle the Promise

    return response.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
  ---*/

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
