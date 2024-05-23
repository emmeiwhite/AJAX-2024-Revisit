const btn = document.querySelector('button')
const url = './api/people.json'
btn.addEventListener('click', () => {
  getData(url)
})

const getData = url => {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', url)

  xhr.onreadystatechange = function () {
    console.log('ReadyState:', xhr.readyState)
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Check if the request is complete
      console.log('Status:', xhr.status) // Log the status
      if (xhr.status >= 200 && xhr.status < 300) {
        // Check if the request was successful
        /*
        const para = document.createElement('p')
        para.textContent = xhr.responseText

        document.body.appendChild(para)
        console.log('Response:', xhr.responseText) // Log the response text
        */

        const data = JSON.parse(xhr.responseText)
        console.log(data)
      } else {
        console.error('Request failed with status:', xhr.status) // Handle error
      }
    }
  }
  xhr.send()
}

// This line of code runs at the start because the XHR code runs asynchronously in the background
console.log('Hello World!')
