var book1 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 300,
    getDescription: function () {
        console.log("The ".concat(this.author, " by ").concat(this.author, " is ").concat(this.pages, " pages"));
    },
};
var book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 280,
    getDescription: function () {
        console.log("The ".concat(this.author, " by ").concat(this.author, " is ").concat(this.pages, " pages"));
    },
};
var library = {
    name: "Local Library",
    location: "City Center",
    books: [book1, book2],
    getTotalPages: function () {
        var total = 0;
        total = book1.pages + book2.pages;
        return total;
    },
};
var pages = library.getTotalPages();
book1.getDescription();
book2.getDescription();
console.log("The total number pages in the library is ".concat(pages));
