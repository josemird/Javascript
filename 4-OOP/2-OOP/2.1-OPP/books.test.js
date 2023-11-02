const Books = require('./classBooks');
const books = require('./books');


describe("OPP", () => {
    it("should get title, author, and published for La vida del lazarillo de Tormes", () => {
      const book = new Books(books[0].title, books[0].author);
      book.setPublished(books[0].published);
      expect(book.getTitle()).toBe(books[0].title);
      expect(book.getAuthor()).toBe(books[0].author);
      expect(book.getPublished()).toBe(books[0].published);
    });
  
    it("should get title, author, and published for The NeverEnding Story", () => {
      const book = new Book(books[1].title, books[1].author);
      book.setPublished(books[1].published);
      expect(book.getTitle()).toBe(books[1].title);
      expect(book.getAuthor()).toBe(books[1].author);
      expect(book.getPublished()).toBe(books[1].published);
    });
  
    it("should get title, author, and published for The Lord of the Rings", () => {
      const book = new Book(books[2].title, books[2].author);
      book.setPublished(books[2].published);
      expect(book.getTitle()).toBe(books[2].title);
      expect(book.getAuthor()).toBe(books[2].author);
      expect(book.getPublished()).toBe(books[2].published);
    });
  
    it("should get title, author, and published for Beowulf", () => {
      const book = new Book(books[3].title, books[3].author);
      book.setPublished(books[3].published);
      expect(book.getTitle()).toBe(books[3].title);
      expect(book.getAuthor()).toBe(books[3].author);
      expect(book.getPublished()).toBe(books[3].published);
    });
  });