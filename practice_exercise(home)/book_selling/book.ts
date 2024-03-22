type Book = {
    title: string,
    author: string,
    pages: number,
    getDescription(): void,
}

type Library = {
    name: string,
    location: string,
    books: Book[],
    getTotalPages(): number,
}

const book1: Book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 300,
    getDescription() {
        console.log(`The ${this.author} by ${this.author} is ${this.pages} pages`);
    },
}

const book2: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 280,
    getDescription() {
        console.log(`The ${this.author} by ${this.author} is ${this.pages} pages`);
    },
}

const library: Library = {
    name: "Local Library",
    location: "City Center",
    books: [book1, book2],
    getTotalPages() {
        let total = 0;
        
        total = book1.pages + book2.pages;
        return total;
    },
}

let pages = library.getTotalPages();

book1.getDescription();
book2.getDescription();

console.log(`The total number pages in the library is ${pages}`);