const addButton = document.querySelector(".add");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const libraryContainer = document.querySelector(".library-container");
const library = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToDOM(book){
    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let deleteButton = document.createElement("button");

    title.textContent = book.title;
    title.classList.add("title");
    author.textContent = book.author;
    author.classList.add("author");
    pages.textContent = book.pages;
    pages.classList.add("pages");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(deleteButton);

    libraryContainer.appendChild(bookContainer);
}

function addBookToLibrary(title, author, pages){
    let book = new Book(title, author, pages);
    library.push(book);
    addBookToDOM(book);
}

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    addBookToLibrary(title, author, pages);
})