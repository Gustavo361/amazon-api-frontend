// First of all, I select the necesarry elements from the HTML section.
const form = document.querySelector('form')
const keywordInput = document.querySelector('[data-key-word-input]')
const keywordResults = document.querySelector('[data-key-word-results]')

// Selecting all the elements needed to display the errors
const closeButton = document.querySelector('[data-error-button]')
const errorWindow = document.querySelector('[data-error-window]')
const errorSpan = document.querySelector('[data-error-span]')

// Adiciona um ouvinte de evento de clique ao botão
closeButton.addEventListener('click', function() {
    // Removes the active class
    errorWindow.classList.remove('active')
})

// As soon as the form button is clicked, the code collects the input value and sends it to MY server.
form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let keyword = keywordInput.value.trim()

    // If the input is invalid, it an alert card is displayed
    if (!keyword) {
        alert('Enter a valid keyword')
        return
    }

    // If there's a valid value inside the input, the code tryes to send and retrieves data.
    // Depending the response from the server, the code give us an error or shows the information on the front.
    try {
        // Using the fetch function to send the keyword to MY server and awaiting the storage of the retrieved data.
        // The keyword is encoded to ensure a proper transmission via URL.
        let response = await fetch(`https://amazon-api-server.onrender.com/api/scrape?keyword=${encodeURIComponent(keyword)}`)
        let data = await response.json()

        // Here we clean the box that shows the data retrieved from Amazon because it can contain previous information.
        keywordResults.innerHTML = ''

        // If no data comes from Amazon, it's displayed "Not found" on the result box.
        if (data.length === 0) {
            keywordResults.innerHTML = 'Not found'
            return
        }

        // Every element retrieved from amazon is separated and an element is created for each one.
        data.forEach(product => {
            const productDiv = document.createElement('div')
            productDiv.classList.add('product')
            productDiv.innerHTML = `
        <h3>${product.title}</h3>
        <p>Rating: ${product.rating} (${product.reviews} reviews)</p>
        <img src="${product.imageUrl}" alt="${product.title}">
      `
            keywordResults.appendChild(productDiv)
        })
    }

    // Handling the errors
    catch (error) {
        console.error('Error', error)
        alert('Failed to fetch data from server')
    }
})