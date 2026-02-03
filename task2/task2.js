export function Book(
    title,
    numOfChapters,
    author,
    numOfPages,
    publisher,
    numOfCopies
) {
    this.title = title;
    this.numOfChapters = numOfChapters;
    this.author = author;
    this.numOfPages = numOfPages;
    this.publisher = publisher;
    this.numOfCopies = numOfCopies;
}


export function Box(height, width, length, material) {
    let content = [];

    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;

    Object.defineProperty(this, "numOfBooks", {
        get() {
            return content.length;
        }
    });


    this.addBook = function (book) {
        content.push(book);
    };

    this.deleteBookByTitle = function (title) {
        const index = content.findIndex(
            book => book.title === title
        );

        if (index === -1) {
            throw new Error("Book not found");
        }

        content.splice(index, 1);
    };

    this.getContent = function () {
        return [...content];
    };
}




const book1 = new Book(
    "ATOMIC HABITS",
    17,
    "James Clear",
    450,
    " anything",
    1
);

const book2 = new Book(
    "The 5 am club",
    6,
    "Robin Sharma",
    300,
    "Anything",
    1
);

console.log("the begging of task 2")

const box1 = new Box(10, 5, 4, "Wood");
const box2 = new Box(8, 4, 3, "Plastic");

box1.addBook(book1);
box1.addBook(book2);

box2.addBook(book1);

console.log(box1.numOfBooks); // 2
console.log(box2.numOfBooks); // 1

console.log("the end of task 2")



