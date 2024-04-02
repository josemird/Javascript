export class Language{
    #id;
    #language_code;
    #language;

    constructor(id){
        this.#id = id;
    }

    get id(){      //objeto computado
        return this.#id;
    }
    set id(id){    //objeto computado
        this.#id = id;
    }

    get language_code(){      //objeto computado
        return this.#language_code;
    }
    set language_code(language_code){    //objeto computado
        this.#language_code = language_code;
    }

    get language(){      //objeto computado
        return this.#language;
    }
    set language(language){    //objeto computado
        this.#language = language;
    }

}