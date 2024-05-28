import { people } from './data.js'

export default function showPeople() {
  const renderPeople = people
    .map(person => {
      const { name, profession } = person
      return `<p><strong>Name:</strong> ${name}, <strong>Profession:</strong> <em>${profession}</em></p>`
    })
    .join('')

  return renderPeople
}

// export default renderPeople
