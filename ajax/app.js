const url = './api/people.json'

const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
  const response = await fetch(url)
  const data = await response.json()

  const htmlParas = data
    .map(person => {
      return `<p>${person.name}</p>`
    })
    .join('')
  document.body.insertAdjacentHTML('beforeend', htmlParas)
})
