const url = './api/people.json'

const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url)

    console.log(response)

    if (!response.ok) {
      throw new Error('Resource Not Found')
    }
    console.log('I am here')
    const data = await response.json()

    renderPersons(data)
  } catch (error) {
    console.log(error)
  }
})

function renderPersons(data) {
  const htmlParas = data
    .map(person => {
      return `<p>${person.name}</p>`
    })
    .join('')

  document.body.insertAdjacentHTML('beforeend', htmlParas)
}
