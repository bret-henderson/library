const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true);
const dune = new Book('Dune', 'Frank Herbert', '412', false);

// console.log(theHobbit.info());
myLibrary.push(theHobbit);
myLibrary.push(dune);

const cardContainer = document.querySelector('.card-container');

function displayBooks() {
  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement('h2');
    author.classList.add('author');
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement('div');
    pages.classList.add('pages');
    pages.textContent = `${book.pages} pages`;
    card.appendChild(pages);

    const isRead = document.createElement('button');
    isRead.classList.add('is-read');
    isRead.textContent = book.isRead;
    card.appendChild(isRead);
  });
}

displayBooks();

const addBook = document.querySelector('.add-book');

function openForm() {
  addBook.classList.add('display: flex');
}

addBook.addEventListener('click', () => openForm());

// function addBookToLibrary() {
//   const newBook = {};
// }
