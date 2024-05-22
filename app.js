const topDiv = document.querySelector('.top')
const middleDiv = document.querySelector('.middle')
const bottomDiv = document.querySelector('.bottom')

setTimeout(() => {
  topDiv.style.backgroundColor = 'orange'

  setTimeout(() => {
    middleDiv.style.backgroundColor = 'blue'

    setTimeout(() => {
      bottomDiv.style.backgroundColor = 'green'
    }, 1500)
  }, 1500)
}, 1500)

/** --- Let's work a basic Promise example | Always think of Cab booking when thinking about Promises  --- */

let promise = new Promise((resolve, reject) => {
  let value = false

  if (value) {
    setTimeout(() => {
      resolve('Got the Data to be used')
    }, 3000)
  } else {
    setTimeout(() => {
      reject('Error getting the data')
    }, 3000)
  }
})

console.log('Async code running in the background ...')
promise
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
