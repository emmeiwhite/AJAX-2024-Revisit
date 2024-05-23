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

//   Let's load image with JS

const loader = document.querySelector('.loader')
const image = document.querySelector('.img')
const error = document.querySelector('.error')

// Function that returns a promise for loading an image
function loadImage(src) {
  return new Promise((resolve, reject) => {
    image.onload = () => resolve()
    image.onerror = () => reject()
    image.src = src

    //   Check if the image is already cached
    if (image.complete) {
      image.onload()
    }
  })
}

// use the promise to handle the image loading
loadImage(image.src)
  .then(() => {
    loader.style.display = 'none'
    image.style.display = 'block'
  })
  .catch(() => {
    loader.style.display = 'none'
    error.style.display = 'block'
  })
