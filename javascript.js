const myLibrary = [];
const cardContainer = document.querySelector(".card-container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = read;
}

function addBookToLibrary(newBook) {
  const card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = newBook.title;
  card.appendChild(title);

  const author = document.createElement("h2");
  author.classList.add("author");
  author.textContent = newBook.author;
  card.appendChild(author);

  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.textContent = `${newBook.pages} pages`;
  card.appendChild(pages);

  const isRead = document.createElement("button");
  isRead.classList.add("is-read");
  isRead.textContent = newBook.isRead;
  card.appendChild(isRead);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
const dune = new Book("Dune", "Frank Herbert", "412", false);

// console.log(theHobbit.info());
myLibrary.push(theHobbit);
myLibrary.push(dune);

myLibrary.forEach((book) => {
  addBookToLibrary(book);
});

const addBook = document.querySelector(".add-book");
const popup = document.querySelector(".popup-container");

function openForm() {
  popup.style.display = "flex";
}

addBook.addEventListener("click", () => openForm());

popup.addEventListener("click", (e) => {
  if (
    e.target.className === "popup-container" ||
    e.target.classList.contains("close-popup")
  ) {
    popup.style.display = "none";
  }
});

const newBookForm = document.querySelector(".new-book-form");

function submitForm(formData) {
  const formDataObj = Object.fromEntries(formData);
  const newBook = new Book(
    formDataObj.title,
    formDataObj.author,
    formDataObj.pages,
    formDataObj["read-checkbox"] === "on"
  );
  myLibrary.push(newBook);
  addBookToLibrary(newBook);
}

function getData(form) {
  const formData = new FormData(form);
  // console.log(Object.fromEntries(formData));
  submitForm(formData);
}

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(e.target);
  popup.style.display = "none";
});
