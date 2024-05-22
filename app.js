const topDiv = document.querySelector('.top')
const middleDiv = document.querySelector('.middle')
const bottomDiv = document.querySelector('.bottom')

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

// This is the callback hell
