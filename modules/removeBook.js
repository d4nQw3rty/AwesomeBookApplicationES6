import Storage from './storage.js';

const removeBook = (index) => {
  const books = Storage.getBooks();
  books.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(books));
};

export default removeBook;
