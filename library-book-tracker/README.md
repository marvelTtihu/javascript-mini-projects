# Library Book Tracker

Simulation of a simple library management system using JavaScript.

### Concepts used
- OOP (Class, Constructor)
- Getter/setters for data validations
- `instanceof` for type checking
- Array Methods (`filter`, `push`)

### How to use
```js
const book = new Book('Atomic Habits', 'James Clear', 2018);
const lib = new Library();

lib.addBook(book);
lib.filterByStatus(false); // view unread books
lib.removeBook('Atomic Habits');
```

### File
- `library-book-tracker/index.js`