class Car {
    #id;
  
    constructor(_id, make, year, model, type) {
      this.#id = _id;
      this.make = make;
      this.year = year;
      this.model = model;
      this.type = type;
    }
  
    getId() {
      return this.#id;
    }
  
    setId(newId) {
      this.#id = newId;
    }
  }

export {Car};