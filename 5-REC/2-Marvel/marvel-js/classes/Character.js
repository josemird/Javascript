//clase con id, modified, name, resourceURI y description
//son privados y el constructor va a llevar solo id y name
//getter y setter como atributos computados
//esta clase hereda de Thunbnails (extends)

import { Thumbnail } from "./Thumbnail";

export class Character extends Thumbnail{

    //ATRIBUTOS DE CLASE
    #id;
    #name;
    #description;
    #modified;
    #resourceURI;

    //CONSTRUCTOR
    constructor(id, name, extension, path){
        super(extension, path)
        this.#id = id;
        this.#name = name;
    }

    //GETTER y SETTER
    get id(){
        return this.#id;
    }
    set id(id){
        this.#id = id;
    }


    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }


    get description(){
        return this.#description;
    }
    set description(description){
        this.#description = description;
    }


    get modified(){
        return this.#modified;
    }
    set modified(modified){
        this.#modified = modified;
    }


    get resourceURI(){
        return this.#resourceURI;
    }
    set resourceURI(resourceURI){
        this.#resourceURI = resourceURI;
    }
   
}