class Book{
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;
        this._isRead = false;
    }

    get title() {
        return this._title;
    }
    get author(){
        return this._author;
    }
    get year(){
        return this._year;
    }

    get isRead(){
        return this._isRead;
    }

    set title(value){
        if(typeof value !== "string" ||  value.trim() === ''){
            throw new Error('Title must be a string and non empty string!')
        }
        this._title = value;
    }

    set author(value){
        if(typeof value !== "string" ||  value.trim() === ''){
            throw new Error('Author name must be a string and non empty string!')
        }
        this._author = value;
    }

    set year(value){
        if(typeof value !== "number" ||  value <= 0){
            throw new Error('Year must be a positive number!')
        }
        this._year = value;
    }
}

class Library{
    constructor(){
        this._books = [];
    }

    addBook(book){
        if (book instanceof Book){
            this._books.push(book);
            return `Confirmed! ${book.title} added to the library!`
        } else {
            console.error("Failed, The parameter must be an instance of the book!")
        }
    }

    removeBook(title){
    this._books = this._books.filter(b => b.title !== title)
    }
    
    filterByStatus(isRead){
        return this._books.filter(book => book.isRead === isRead);
    }

    bookShelf(){
        return this._books;
    }

}

const book1 = new Book('Atomic Habits', 'James Clear', 2018);
const book2 = new Book("Can't Hurt me", 'David Goggins', 2018);
const lib = new Library();

console.log(lib.addBook(book1)); 
console.log(lib.addBook(book2));
console.log(lib.bookShelf());