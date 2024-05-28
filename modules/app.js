import { people } from './data.js'
import get from './getElement.js'
import showPeople from './showPeople.js'

const container = get('.container')
const button = get('button')

button.addEventListener('click', () => {
  container.innerHTML = showPeople(people)
})
