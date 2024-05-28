import { people } from './data.js'

const container = document.querySelector('.container')
const button = document.querySelector('button')
import showPeople from './showPeople.js'

button.addEventListener('click', () => {
  container.innerHTML = showPeople(people)
})
