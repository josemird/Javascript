export class Books{
    #title;
    #author;
    published;

    constructor(title, author, published){
        this.#title = title,
        this.#author = author,
        this.published = published;
    }

// MAKING 'TITLE AND AUTHOR' A PUBLIC ATTRIBUTE
    get title(){
        return this.#title
    }

    get author(){
        return this.#author
    }

//GETTER & SETTER 'TITLE'
    getTitle(){
        return this.#title;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }

//GETTER & SETTER 'AUTHOR'
    getAuthor(){
        return this.author;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }

//GETTER & SETTER 'PUBLISHED'
    getPublished() {
        return this.published;
      }
    setPublished(newPublished) {
        this.published = newPublished;
      }
    
}

