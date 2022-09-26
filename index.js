import Book from './modules/bookClass.js';
import Storage from './modules/storage.js';
import bookHTML from './modules/bookHTML.js';


const showListButton = document.getElementById('show-list');
const addNewButton = document.getElementById('add-new');
const showContactButton = document.getElementById('show-contact');

const sectionList = document.getElementById('list');
const sectionForm = document.getElementById('form');
const sectionContact = document.getElementById('contact');

//Navigation Events

addNewButton.addEventListener('click', () => {
  sectionForm.style.display = 'flex';
  addNewButton.style.color = 'blue';
  showListButton.style.color = 'black';
  showContactButton.style.color = 'black';
  sectionList.style.display = 'none';
  sectionContact.style.display = 'none';
});

showListButton.addEventListener('click', () => {
  sectionList.style.display = 'flex';
  showListButton.style.color = 'blue';
  showContactButton.style.color = 'black';
  addNewButton.style.color = 'black';
  sectionForm.style.display = 'none';
  sectionContact.style.display = 'none';
});

showContactButton.addEventListener('click', () => {
  sectionContact.style.display = 'flex';
  showContactButton.style.color = 'blue';
  sectionList.style.display = 'none';
  sectionForm.style.display = 'none';
  showListButton.style.color = 'black';
  addNewButton.style.color = 'black';
});

//Add Book Event

const form = document.getElementById('book-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const book = new Book(title, author);
  Storage.addBook(book);
  bookHTML();
  form.reset();

});

//Display Books Event
bookHTML();