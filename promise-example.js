// Let's upload the image on button click
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')

const url = 'https://source.unsplash.com'

btn.addEventListener('click', () => {
  const promise = loadImage(url)
  console.log(promise)
})

function loadImage(urlImage) {
  return new Promise((resolve, reject) => {
    let img = new Image()

    img.addEventListener('load', () => {
      console.log('Hey everything worked!')
    })

    img.addEventListener('error', () => {
      console.log('There was an error!')
    })

    img.src = urlImage // here we are setting src for the image
  })
}
