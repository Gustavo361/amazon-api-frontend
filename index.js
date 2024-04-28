const form = document.querySelector('form')
const keywordInput = document.querySelector('[data-key-word-input]')
const keywordResults = document.querySelector('[data-key-word-results]')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let keyword = keywordInput.value.trim()

    console.log(keyword)

    if (!keyword) {
        alert('Enter a valid keyword')
        return
    }

    try {
        let response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`)
        let data = await response.json()

        keywordResults.innerHTML = ''

        if (data.length === 0) {
            keywordResults.innerHTML = 'Not found'
            return
        }

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
    catch (error) {
        console.error('Error', error)
        alert('Failed to fetch data from server')
    }
})