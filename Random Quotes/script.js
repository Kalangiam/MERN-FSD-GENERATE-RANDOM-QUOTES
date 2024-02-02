document.addEventListener('DOMContentLoaded', () => {
    const quoteDetailsContainer = document.getElementById('quote-details');
    const getQuoteButton = document.getElementById('get-quote-btn');
    function fetchRandomQuote() {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          const quote = data.content;
          const author = data.author;
          const quoteDetailsHTML = `
            <p class="quote">"${quote}"</p>
            <p class="author">- ${author}</p>
          `;
          quoteDetailsContainer.innerHTML = quoteDetailsHTML;
        })
        .catch(error => {
          const errorMessage = `Error fetching quote details: ${error.message}`;
          console.error(errorMessage);
          displayErrorMessage(errorMessage);
        });
    }
    function displayErrorMessage(message) {
      const errorElement = document.createElement('p');
      errorElement.textContent = message;
      errorElement.style.color = 'red';
      quoteDetailsContainer.appendChild(errorElement);
    }
    getQuoteButton.addEventListener('click', fetchRandomQuote);
    fetchRandomQuote();
  });
  