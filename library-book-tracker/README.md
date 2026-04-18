# Library Book Tracker

A simple and elegant JavaScript project for managing a personal library. This application allows you to add books, remove them, and filter by read status using Object-Oriented Programming principles.

## Features

- ✅ Add books to your library
- ✅ Remove books by title
- ✅ Filter books by read status
- ✅ Data validation for book properties
- ✅ View your complete book shelf

## Javascript Concepts Used

- **ES6 Classes**: Object-oriented structure with `Book` and `Library` classes
- **Encapsulation**: Private properties using underscore prefix (`_title`, `_author`, etc.)
- **Getters & Setters**: Property accessors with built-in validation
- **Array Methods**: `filter()` and `push()` for data manipulation
- **Data Validation**: Input validation in setters to ensure data integrity
- **instanceof Operator**: Type checking for book objects

## Installation

1. Clone this repository or download the files
2. Ensure you have Node.js installed
3. No dependencies required - vanilla JavaScript only

## Usage

```javascript
// Create a new book
const book1 = new Book('Atomic Habits', 'James Clear', 2018);
const book2 = new Book("Can't Hurt me", 'David Goggins', 2018);

// Create a library instance
const lib = new Library();

// Add books to library
lib.addBook(book1);
lib.addBook(book2);

// View all books
console.log(lib.bookShelf());

// Filter books by read status
const unreadBooks = lib.filterByStatus(false);
const readBooks = lib.filterByStatus(true);

// Remove a book
lib.removeBook('Atomic Habits');
```

## Class Reference

### Book Class
- **Constructor**: `new Book(title, author, year)`
- **Properties**: 
  - `title` (getter/setter) - Book title (string, non-empty)
  - `author` (getter/setter) - Author name (string, non-empty)
  - `year` (getter/setter) - Publication year (positive number)
  - `isRead` (getter) - Read status (boolean, default: false)

### Library Class
- **Methods**:
  - `addBook(book)` - Add a Book instance to the library
  - `removeBook(title)` - Remove a book by title
  - `filterByStatus(isRead)` - Get books filtered by read status
  - `bookShelf()` - Return all books in the library

## License

This project is open source and available under the MIT License.
