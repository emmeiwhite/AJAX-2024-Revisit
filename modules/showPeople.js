import { people } from './data.js'
const renderPeople = people
  .map(person => {
    const { name, profession } = person
    return `<p><strong>Name:</strong> ${name}, <strong>Profession:</strong> <em>${profession}</em></p>`
  })
  .join('')

export default renderPeople
