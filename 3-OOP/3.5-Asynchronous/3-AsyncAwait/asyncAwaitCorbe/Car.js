export class Car {
    #id
    make
    year
    model
    type

    constructor(id,make){
        this.#id = id
        this.make = make
    }
    get id(){
        return this.#id
    }
    set id(id){
        this.#id = id
    }
    get make(){
        return this.make
    }
    set make(make){
        this.make = make
    }
    get year(){
        return this.year
    }
    set year(year){
        this.year = year
    }
    get model(){
        return this.model
    }
    set model(model){
        this.model = model
    }
    get type(){
        return this.type
    }
    set type(type){
        this.type = type
    }
}

export async function carArr(cochesObjeto){
    return new Promise((resolve, reject) => {
        try {
            const final = cochesObjeto.map(coche => {
                let car = new Car(coche.id, coche.make)
                car.year = coche.year
                car.model = coche.model
                car.type = coche.type
                return car;
            });
            resolve(final);
        } catch (error) {
            reject(error);
        }
    });
}

export async function sortCars(arr){
    return new Promise((resolve, reject) => {
        try{
            const final = arr.filter(coche => coche.year > 2010);
            resolve(final);
        }catch(error){
            reject(error);
        }
    });
}
