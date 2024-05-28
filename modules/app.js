import { people } from './data.js'
console.log(people)

const container = document.querySelector('.container')
const button = document.querySelector('button')

const renderPeople = people
  .map(person => {
    const { name, profession } = person
    return `<p><strong>Name:</strong> ${name}, <strong>Profession:</strong> <em>${profession}</em></p>`
  })
  .join('')

button.addEventListener('click', () => {
  container.innerHTML = renderPeople
})
