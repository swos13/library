const addButton = document.querySelector(".add");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const libraryContainer = document.querySelector(".library-container");
const library = [];
let id = 0;

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.id = id++;
}

function addBookToDOM(book){
    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let titleLabel = document.createElement("label");
    let authorLabel = document.createElement("label");
    let pagesLabel = document.createElement("label");
    let readLabel = document.createElement("label");
    let readCheckbox = document.createElement("input");
    let deleteButton = document.createElement("button");

    title.textContent = book.title;
    title.classList.add("title");
    titleLabel.textContent = "Title: ";
    author.textContent = book.author;
    author.classList.add("author");
    authorLabel.textContent = "Author: ";
    pages.textContent = book.pages;
    pages.classList.add("pages");
    pagesLabel.textContent = "Pages: ";
    readLabel.textContent = "Read: ";
    readCheckbox.type = "checkbox";
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.id = book.id;

    bookContainer.appendChild(titleLabel);
    bookContainer.appendChild(title);
    bookContainer.appendChild(authorLabel);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pagesLabel);
    bookContainer.appendChild(pages);
    readLabel.appendChild(readCheckbox);
    bookContainer.appendChild(readLabel);
    bookContainer.appendChild(deleteButton);

    readCheckbox.addEventListener('change', () => {
        book.read = readCheckbox.checked;
    })

    deleteButton.addEventListener('click', () => {
        bookContainer.remove();
        let id;
        for(let i=0; i<library.length; i++)
            if(deleteButton.id == library[i].id){
                id = i;
                break;
            }
        library.splice(id,1);
    })

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