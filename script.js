const library = [];

function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book){
    library.push(book);
}