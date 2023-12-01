import { cars } from "./mockData.js";
import {Car} from "./constructorcar.js"

  let select = document.getElementById('yearSelect');

 
  let filFecha = Array.from(new Set(cars.map(coche => coche.year)))
  
  filFecha.forEach(año => {
    let option = document.createElement("option")
    option.value = año;
    option.text = año
    select.appendChild(option)
  })
 
  let select2 = document.getElementById('make');

 
  let filmake = Array.from(new Set(cars.map(coche => coche.make)))
  filmake.forEach(marca => {
    let option = document.createElement("option")
    option.value = marca;
    option.text = marca;
    select2.appendChild(option)
  })

  let select3 = document.getElementById('model');

  let filmodel = Array.from(new Set(cars.map(coche => coche.model)))
  filmodel.forEach(model => {
    let option = document.createElement("option")
    option.value = model;
    option.text = model;
    select3.appendChild(option)
  })

  let select4 = document.getElementById('type');

  let filtype = Array.from(new Set(cars.map(coche => coche.type)))
  filtype.forEach(model => {
    let option = document.createElement("option")
    option.value = model;
    option.text = model;
    select4.appendChild(option)
  })
  

function Arraycar(){
  return new Promise((resolve, reject) => {
      let año = select.value
      let marca = select2.value
      let modelo = select3.value
      let tipo = select4.value
      let coches = cars.map(car => new Car(car.id, car.make, car.year, car.model, car.type));
      let cochesDesde2010 = coches.filter(car => car.year >= parseInt(año));
      if (marca === "all") {
        
        let cochesmake = cochesDesde2010;
        if (modelo === "all"){
          let cochesmodel = cochesmake;
          

          if (tipo === "all"){
            let cochestype = cochesmodel
            resolve(cochestype)
          }else{
            let cochestype = cochesmodel.filter(car => car.type == tipo)
            resolve(cochestype)
          }
        }else{
          let cochesmodel = cochesmake.filter(car => car.model == modelo)
          if (tipo === "all"){
            let cochestype = cochesmodel
            resolve(cochestype)
          }else{
            let cochestype = cochesmodel.filter(car => car.type == tipo)
            resolve(cochestype)
          }
        }
      } else {
        
        let cochesmake = cochesDesde2010.filter(car => car.make.toLowerCase() == marca.toLowerCase());
        if (modelo === "all"){
          let cochesmodel = cochesmake;
          if (tipo === "all"){
            let cochestype = cochesmodel
            resolve(cochestype)
          }else{
            let cochestype = cochesmodel.filter(car => car.type == tipo)
            resolve(cochestype)
          }
        }else{
          let cochesmodel = cochesmake.filter(car => car.model == modelo)
          if (tipo === "all"){
            let cochestype = cochesmodel
            resolve(cochestype)
          }else{
            let cochestype = cochesmodel.filter(car => car.type == tipo)
            resolve(cochestype)
          }
        }
      }
    });
  }



  function mostrarResultados(resultado) {
    // Limpiar contenido anterior
    const container = document.getElementById('container');
    if (container) {
      container.remove();
    }
  
    // Crear un contenedor principal
    const nuevoContainer = document.createElement('div');
    nuevoContainer.id = 'container';
  
    
  
    // Iterar sobre los coches y crear elementos HTML para cada uno
    resultado.forEach(coche => {
      const cocheContainer = document.createElement('div');
  
      // Crear elementos <p> para mostrar los datos
      const makeModel = document.createElement('p');
      makeModel.textContent = `${coche.model}/${coche.make}`;
  
      const typeYear = document.createElement('p');
      typeYear.textContent = `${coche.type}/${coche.year}`;
  
      // Agregar los elementos al contenedor del coche
      cocheContainer.appendChild(makeModel);
      cocheContainer.appendChild(typeYear);
  
      // Agregar el contenedor del coche al contenedor principal
      nuevoContainer.appendChild(cocheContainer);
    });
  
    // Agregar el contenedor principal al body o a algún otro elemento en tu HTML
    document.body.appendChild(nuevoContainer);
  }

  async function consumirPromesas() {
    try {
      const resultado = await Arraycar();
      mostrarResultados(resultado);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  select.addEventListener("change", function(){
    consumirPromesas();
    
  })

  select2.addEventListener("change", function(){
    consumirPromesas();
    
  })

  select3.addEventListener("change", function(){
    consumirPromesas();
    
  })

  select4.addEventListener("change", function(){
    consumirPromesas();
    
  })

export { Car, Arraycar, consumirPromesas };