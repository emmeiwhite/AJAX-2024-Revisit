// Let's upload the image on button click
const btn = document.querySelector('.btn')
const container = document.querySelector('.img-container')

const url = 'https://source.unsplash.com/random'

btn.addEventListener('click', () => {
  const promise = loadImage(url)
  console.log(promise)
})

function loadImage(urlImage) {
  return new Promise((resolve, reject) => {})
}
