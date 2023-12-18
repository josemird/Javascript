import * as Car from "./Cars.js";


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
