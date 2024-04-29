# Amazon Scraper

## Description
A responsive interface featuring a form, an input field, a button, and a display box. After the user enters and searches a keyword into the input field, the content is sent to a server, which then forwards the keyword to Amazon. Amazon retrieves information such as title, rating, reviews, price, and image, which is then relayed back to the user on the frontend.

The frontend and backend are hosted separately.

1. frontend repository: https://github.com/Gustavo361/amazon-api-frontend
1. backend repository: https://github.com/Gustavo361/amazon-api-server

## Author
Gustavo Faustino

## Installation
1. Clone the repository.
2. Install the dependencies with `npm install` or just `npm i`.

## Usage
1. Inside backend folder, inicialize the server with `node server.js`.
2. Access the application on http://localhost:3000.
3. Or just access https://amazon-api-frontend.onrender.com.

## Main Features
1. Extracts product information from Amazon based on search keywords.
2. Displays results in a clean and responsive user interface.
3. Displays results in a clean and responsive user interface.

## Limitations
1. Sometimes the Render Server becomes very slow and the data takes a while to appear in the display box.
2. Normally, it takes about 10s for the data to be displayed.

## Technologies Used
1. HTML
2. CSS
3. JS
4. Node.js
5. Express.js
6. Axios
7. fetch()
8. JSDOM
9. CORS
10. Render

## Pictures
### desktop
![desktop-design](images/design/desktop-clean.jpg)
![desktop-design](images/design/desktop-filled.jpg)
### mobile
![mobile-design](images/design/mobile-clean.jpeg)
![mobile-design](/images/design/mobile-filled.jpeg)

# Contact
1. e-mail: gustavofaustino361@gmail.com
2. LinkedIn: https://www.linkedin.com/in/gustavo-faustino-2659331ba/

## License

MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The MIT License (MIT)

Copyright (c) [2024] [Gustavo-Faustino]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.