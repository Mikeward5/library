const library = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const button = document.querySelector("#sub")
const form = document.querySelector("#addForm")

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "This has been read" : "This has not been read yet"}.`
    }

function addBookToLibrary(title, author, pages, read) {
    const id = crypto.randomUUID();
    library.push(new Book(title, author, pages, read, id))
    console.log(library)
}

addBookToLibrary("The Hobbit", "J.R.R Tolken", 295, false);
addBookToLibrary("Lord of the Rings", "J.R.R Tolken", 295, true);

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const read = document.querySelector(
        'input[name="isTrue"]:checked'
    );

    addBookToLibrary(
        title.value,
        author.value,
        pages.value,
        read.value === "true"
    )
})
for(let book of library) {
    console.log(book);
}
console.log(library[1].info());