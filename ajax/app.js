const xhr = new XMLHttpRequest()
console.log(xhr)

xhr.open('GET', './api/sample.txt')

xhr.onreadystatechange = function () {
  console.log('ReadyState:', xhr.readyState)
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // Check if the request is complete
    console.log('Status:', xhr.status) // Log the status
    if (xhr.status >= 200 && xhr.status < 300) {
      // Check if the request was successful
      const para = document.createElement('p')
      para.textContent = xhr.responseText

      document.body.appendChild(para)
      console.log('Response:', xhr.responseText) // Log the response text
    } else {
      console.error('Request failed with status:', xhr.status) // Handle error
    }
  }
}
xhr.send()
