const container = document.querySelector('.container')
const button = document.querySelector('button')
import renderPeople from './showPeople.js'

button.addEventListener('click', () => {
  container.innerHTML = renderPeople
})
