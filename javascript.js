const myLibrary = [];
const cardContainer = document.querySelector(".card-container");

const addBook = document.querySelector(".add-book");
const popup = document.querySelector(".popup-container");

const newBookForm = document.querySelector(".new-book-form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  let readStr = "";
  if (read === true) readStr = "Read";
  else readStr = "Not Read";
  this.isRead = readStr;
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

  const removeBookBtn = document.createElement("button");
  removeBookBtn.classList.add("remove-book");
  removeBookBtn.textContent = "Remove Book";
  card.appendChild(removeBookBtn);
}

function openForm() {
  popup.style.display = "flex";
}

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
  submitForm(formData);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
const dune = new Book("Dune", "Frank Herbert", "412", false);

myLibrary.push(theHobbit);
myLibrary.push(dune);

myLibrary.forEach((book) => {
  addBookToLibrary(book);
});

addBook.addEventListener("click", () => openForm());

popup.addEventListener("click", (e) => {
  if (
    e.target.className === "popup-container" ||
    e.target.classList.contains("close-popup")
  ) {
    popup.style.display = "none";
  }
});

document.onkeydown = (e) => {
  if (e.key === "Escape") {
    popup.style.display = "none";
  }
};

// Submit form
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(e.target);
  popup.style.display = "none";
  e.target.reset();
});

// Remove book
document.addEventListener("click", (e) => {
  const target = e.target.closest(".remove-book"); // Or any other selector.
  if (target) {
    const index = Array.prototype.indexOf.call(
      target.parentElement.parentElement.children,
      target.parentElement
    );
    myLibrary.splice(index, 1);
    target.parentElement.remove();
  }
});

// Toggle is-read
document.addEventListener("click", (e) => {
  const target = e.target.closest(".is-read"); // Or any other selector.
  if (target) {
    const index = Array.prototype.indexOf.call(
      target.parentElement.parentElement.children,
      target.parentElement
    );
    if (myLibrary[index].isRead === "Not Read") {
      myLibrary[index].isRead = "Read";
      target.textContent = "Read";
    } else {
      myLibrary[index].isRead = "Not Read";
      target.textContent = "Not Read";
    }
  }
});
