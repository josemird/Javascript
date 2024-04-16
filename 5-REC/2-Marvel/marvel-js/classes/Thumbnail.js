//extension y path en privados y constructor completo, una clase con sus atributos

export class Thumbnail{
    
    #extension;
    #path;

    constructor(extension, path){
        this.#extension = extension;
        this.#path = path;
    }

    //GETTER y SETTER
    get extension (){
        return this.#extension;
    }
    set extension(extension){
        this.#extension = extension;
    }

    get path (){
        return this.#path;
    }
    set path(path){
        this.#path = path;
    }
    
    //FUNCION COMPUTADA THUNBNAIL
    get thumbnail(){
        return `${this.#path}.${this.#extension}`
    }//comillas francesas se les llama Literal Template

}