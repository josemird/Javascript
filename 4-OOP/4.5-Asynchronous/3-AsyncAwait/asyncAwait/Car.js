import * as mockData from "./mockData.js"


export class Cars{
    #id;
    year;
    make;
    model;
    type;

//Constructor: Crea e Initialize el objeto "Car"
    constructor(id, make){
        this.#id = id;
        this.make = make;
    }

//Getter y Setter ID
    get id(){
        return this.#id;
    }
    set id(id){
        this.#id = id;
    }

//Getter y Setter YEAR
    get year(){
        return this.year;
    }
    set year(year){
        this.year = year;
    }

//Getter y Setter MAKE
    get make(){
        return this.make;
    }
    set make(make){
        this.make = make;
    }

//Getter y Setter MODEL
    get model(){
        return this.model;
    }
    set model(model){
        this.model = model;
    }

//Getter y Setter TYPE
    get type(){
        return this.type;
    }
    set type(type){
        this.type = type;
    }

}


export async function mapToClassesPromise(carObjects) {
    return new Promise((resolve, reject) => {
        try{
            let carArray=[];
            carObjects.forEach(carObject => {
                const car = new Car(carObject.id,carObject.make);
                car.model=carObject.model;
                car.type=carObject.type
                car.year=carObject.year;
                carArray.push(car);
            });
            resolve(carArray)
        }catch(error){
            reject(error)
        }
    }
    )
}

export async function Filtercar(carArray){
    return new Promise((resolve,reject)=>{
        try{
            let array2010=[];
            carArray.forEach(car => {
                if(car.year>=2010){
                    array2010.push(car)
                }
            });
            resolve(array2010)
        }catch(error){
            reject(error)
        }
    })
}
