import removeBook from './removeBook.js';
import Storage from './storage.js';

const getBooks = () => Storage.getBooks();
const bookHTML = () => {
  const books = getBooks();
  const list = document.getElementById('book-list');
  list.innerHTML = '';
  books.forEach((book, index) => {
    const bookDiv = document.createElement('tr');
    bookDiv.setAttribute('id', index);
    if (bookDiv.id % 2 === 0) {
      bookDiv.classList.add('gray');
      bookDiv.classList.add('bookDiv');
    } else {
      bookDiv.classList.add('white');
      bookDiv.classList.add('bookDiv');
    }
    const trContent = document.createElement('td');
    trContent.innerHTML = `"${book.title}" by ${book.author}`;
    bookDiv.appendChild(trContent);
    const remove = document.createElement('button');
    remove.innerHTML = 'Remove';
    remove.addEventListener('click', () => {
      removeBook(index);
      bookHTML();
    });

    bookDiv.appendChild(remove);
    list.appendChild(bookDiv);
  });
};

export default bookHTML;