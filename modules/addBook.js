import Storage from './storage.js';
import Book from './bookClass.js';

const addBooks = () => {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const book = new Book(title, author);
  Storage.addBook(book);
};
export default addBooks;