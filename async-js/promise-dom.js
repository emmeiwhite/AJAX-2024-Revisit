const topDiv = document.querySelector('.top')
const centerDiv = document.querySelector('.center')
const bottomDiv = document.querySelector('.bottom')

const btn = document.querySelector('.btn')

// Challenge is to set the colors one after the other to the above 3 boxes using Promises
btn.addEventListener('click', () => {
  setBgColor(topDiv, 'red')
    .then(() => setBgColor(centerDiv, 'orange'))
    .then(() => setBgColor(bottomDiv, 'pink'))
    .catch(error => {
      console.log(error)
    })
})

function setBgColor(element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.backgroundColor = color

        resolve()
      }, 2000)
    } else {
      reject(new Error(`There is no such element ${element}`))
    }
  })
}
