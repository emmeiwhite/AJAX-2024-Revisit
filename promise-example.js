// Let's upload the image on button click
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')

const url = 'https://source.unsplash.com/random'

btn.addEventListener('click', () => {
  loader.style.display = 'block'
  const promise = loadImage(url)
  promise
    .then(img => {
      loader.style.display = 'none'
      error.style.display = 'none'
      console.log(img)
      container.innerHTML = '' // Clear previous images
      container.appendChild(img)
    })
    .catch(errorText => {
      loader.style.display = 'none'
      error.innerHTML = `<p>${errorText}</p>`
      error.style.display = 'block'
    })
})

function loadImage(urlImage) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.classList.add('img')

    img.addEventListener('load', () => {
      console.log('Hey everything worked!')
      resolve(img)
    })

    img.addEventListener('error', () => {
      console.log('There was an error!')
      reject(new Error(`Failed to load the image from the source:${urlImage}`))
    })

    img.src = urlImage // here we are setting src for the image
  })
}
