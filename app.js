const topDiv = document.querySelector('.top')
const middleDiv = document.querySelector('.middle')
const bottomDiv = document.querySelector('.bottom')

// This is the callback hell
topDiv.addEventListener('click', () => {
  setTimeout(() => {
    top.style.backgroundColor = 'orange'

    middleDiv.addEventListener('click', () => {
      setTimeout(() => {
        top.style.backgroundColor = 'blue'

        bottomDiv.addEventListener('click', () => {
          setTimeout(() => {
            top.style.backgroundColor = 'green'
          }, 3000)
        })
      }, 3000)
    })
  }, 3000)
})

/** --- Let's work a basic Promise example | Always think of Cab booking when thinking about Promises  --- */

let promise = new Promise((resolve, reject) => {})

console.log(promise)
