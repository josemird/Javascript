

class Books{
    #title;
    #author;
    published;

    constructor(title, author, published){
        this.#title = title,
        this.#author = author,
        this.published = published;
    }

// GETTER SETTER 'TITLE & AUTHOR'
    get title(){
        return this.#title
    }
    set Title(newTitle) {
        this.#title = newTitle;
    }

    get author(){
        return this.#author
    }
    set Author(newAuthor) {
        this.#author = newAuthor;
    }
}
    const book = new Books("");
    console.log(book.title);
    console.log(book.author);
    console.log(book.published);