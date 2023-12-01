export class Car{
    #id;
    year;
    make;
    model;
    type;

    constructor(id, make){
        this.#id = id;
        this.make = make;
    }

    get id(){
        return this.#id
    }

    get year(){
        return this.year;
    }

    get make(){
        return this.make;
    }

    get model(){
        return this.model
    }

    get type(){
        return this.type
    }

    set id(id){
        this.#id=id;
    }

    set year(year){
        this.year = year;
    }

    set make(make){
        this.make = make;
    }

    set model(model){
        this.model = model;
    }

    set type(type){
        this.type = type;
    }
}

export async function carToClass (carObjects){
    return new Promise((resolve, reject) => {
        try{
            let carArray = [];
            carObjects.forEach(carObject => {
                const car = new Car(carObject.id, carObject.make);
                car.model = carObject.model;
                car.type = carObject.type;
                car.year = carObject.year;
                carArray.push(car);
            });
        resolve(carArray);
        }catch(error){
            reject(error);
        }
    });
};

export async function carFilter(carArray){
    return new Promise((resolve, reject) => {
        try{
            let cars2010 = [];
            carArray.forEach(car => {
                if(car.year >= 2010){
                    cars2010.push(car);
                }
            });
            resolve(cars2010);
        }catch(error){
            reject(error);
        }
    });
}