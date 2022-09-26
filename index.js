import bookHTML from './modules/bookHTML.js';
import addBooks from './modules/addBook.js';
import Time from './modules/time.js';

const showListButton = document.getElementById('show-list');
const addNewButton = document.getElementById('add-new');
const showContactButton = document.getElementById('show-contact');

const sectionList = document.getElementById('list');
const sectionForm = document.getElementById('form');
const sectionContact = document.getElementById('contact');

// Navigation Events

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

// Add Book Event

const form = document.getElementById('book-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBooks();
  bookHTML();
  form.reset();
});

const systemDate = document.getElementById('date');
systemDate.innerHTML = Time.getDate();
const setTime = () => {
  systemDate.innerHTML = Time.getDate();
};
setInterval(setTime, 1000);
// Display Books Event
bookHTML();