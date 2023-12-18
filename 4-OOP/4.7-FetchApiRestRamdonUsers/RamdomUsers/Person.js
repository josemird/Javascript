export class Person{
    #name
    #email
    #phone
    #location
    constructor(name, email, phone, location){
        this.#name = name
        this.#email = email
        this.#phone = phone
        this.#location = location  
   }

    //NAME
    get name(){
        return this.#name
    }
    set name(name){
        this.#name = name
    }
    //MAIL
    get email(){
        return this.#email
    }
    set email(email){
        this.#email = email
    }
    //PHONE
    get phone(){
        return this.#phone
    }
    set phone(phone){
        this.#phone = phone
    }

    //LOCATION
    get location(){
        return this.#location
    }
    set location(location){
        this.#location = location
    }
}

export async function Persona(personas) {
    return new Promise((resolve, reject) => {
      const persona = new Person(
        personas.name.first,
        personas.email,
        personas.phone,
        personas.location.state
      );
      resolve(persona);
      reject(error);
    });
  }