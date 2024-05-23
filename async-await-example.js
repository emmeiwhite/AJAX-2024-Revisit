const topDiv = document.querySelector('.top1')
const centerDiv = document.querySelector('.center')
const bottomDiv = document.querySelector('.bottom')

const btn = document.querySelector('.btn')

// Challenge is to set the colors one after the other to the above 3 boxes using Promises
btn.addEventListener('click', async () => {
  try {
    const first = await setBgColor(topDiv, 'orange')
    await setBgColor(centerDiv, 'green')
    await setBgColor(bottomDiv, 'pink')

    console.log(first)
    // The above line runs at the last, await makes sure promise is settled - either rejected or resolved and only then moves to the next line
  } catch (error) {
    console.log(`Promise is rejected`)
  }
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
