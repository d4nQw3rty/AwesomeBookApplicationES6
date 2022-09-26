import bookHTML from "./bookHTML.js";
import Storage from "./storage.js";

const removeBook = (index) => {
  const books = Storage.getBooks();
  books.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(books));
  bookHTML();
};

export default removeBook;
