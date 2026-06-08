// ============================================================
// EXERCISE: Fetching data from an API
// ============================================================
//
// GOAL
// ----
// Build a book search using the Open Library API.
// When the user searches for a title, display the results
// (book title + author) as a list on the page.
//
// API endpoint:
// https://openlibrary.org/search.json?q=YOUR_SEARCH_TERM
// e.g.: https://openlibrary.org/search.json?q=the+lord+of+the+rings
//
// Try it in your browser first to see what the response looks like.
// The data you need is inside: response.docs[]
// Each book has: .title and .author_name[]
//
//
// ============================================================
const input = document.getElementById('search-input');
const button = document.getElementById('search-btn');
const list = document.getElementById('results');

button.addEventListener('click', () => {
  const query = input.value;
  
  list.innerHTML = '<li>Loading...</li>';


  fetch(`https://openlibrary.org/search.json?q=${query}`)
    .then(response => response.json())
    .then(data => {
      list.innerHTML = ''; 
      

      const books = data.docs.slice(0, 10);
      
      books.forEach(book => {
        const li = document.createElement('li');
        

        const author = book.author_name ? book.author_name[0] : 'Author unknown';
        
        li.textContent = `${book.title} — ${author}`;
        list.appendChild(li);
      });
    })
    .catch(error => {
      list.innerHTML = '<li>Error occurred while searching for books.</li>';
      console.error(error);
    });
});

console.log("script loaded");