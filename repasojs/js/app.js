/* console.log("Prueba de esta ")
//Crear variables
 var aprender = true;
 console.log(aprender)
aprender="Sahid"
console.log(aprender)

// variables con const
//Simpre tienen que ser inicializadas
const aprendiendo = "Javascript"
console.log(aprendiendo) */
/* 
//variables con let
let  aprendiendo ="JavaScript"
aprendiendo= true
console.log(aprendiendo) */

//Scope
/* var musica= "Rock"
if(musica){
    var musica= "Pop"
    console.log("Dentro del if ", musica)
}
console.log("Fuera del if ", musica)
 */
//Scope con let 
/* let musica= "Rock"
if(musica){
    let musica= "Pop"
    console.log("Dentro del if ", musica)
}
console.log("Fuera del if ", musica) */

//Template string
/* const nombre = "Sahid"
const trabajo= "Desarrollador web"
console.log("Nombre "+ nombre + ", trabajo "+ trabajo)
console.log(`Nombre ${nombre}, trabajo ${trabajo}` )*/

//concantenar con multiples lineas
/* const conetenedorApp= document.querySelector("#app") */
/* let html="<ul>"+
                "<li> Nombre"+nombre+"</li>"+
                "<li> Trabajo"+ trabajo+"</li>"
        "</ul>" */
//Buen caso de uso de template strings
/* 
let html=`<ul>
                <li> Nombre ${nombre} </li>
                <li> Trabajo ${trabajo} </li>
         </ul>`
conetenedorApp.innerHTML=html; */

//Function declaration

/* saludar("Juan")

function saludar(nombre){
    console.log("Bienvenido"+ nombre)
}


//Function expresion
const cliente = function(nombreCliente){
    console.log("Mostrando datos del cliente "+ nombreCliente)
}
cliente("Pepito") */

//Parametros por default en las funciones
/*  function actividad(nombre="Walter White",actividad="Enseñar quimica"){
     console.log(`La persoan esta ${nombre} esta realizando la actividad de ${actividad}`)
 } */
/*  const actividad = function(nombre="Walter White",actividad="Enseñar quimica"){
    console.log(`La persoan esta ${nombre} esta realizando la actividad de ${actividad}`)
 }
 actividad("Sahid", "Corriendo")
 actividad("Sihan")
 actividad()
 */
 //Arrow functions
  /* let viajando= destino=> `Viajando  a la ciuidad de: ${destino}`
  
  let viaje= viajando=("Paris")
  console.log(viaje) */

  //Objetos

  //Object literal
/*   const persona ={
      nombre: "Juan",
      profesion:"Desarrollador Web",
      edad:20
  }
  console.log(persona) */
/*   const persona2 ={
    nombre: "Juan",
    profesion:"Desarrollador Web",
    edad:20
} */
/*   let nombre_persona ="Juan"
  let profesion="Desarrollador Web"
  console.log(nombre_persona)
  console.log(profesion)
  console.log(persona)
  console.log(persona2)
  console.log(persona.nombre)
  console.log(persona.profesion)
  console.log(persona["edad"]) */

  //Object Constructor


/* function Tarea(nombre,urgencia){
      this.nombre=nombre;
      this.urgencia=urgencia;
  } */
  //Agregar un prototype a tarea
/* Tarea.prototype.mostrarInformacionTarea= function (){
    return `La tarea ${this.nombre} tiene una urgencia de ${this.urgencia}`
} */
//Permite atar funciones a ciertos objetos 
//const tarea1= new Tarea("Aprender Javascript y React","Urgente")
/* const tarea2= new Tarea("Desayunar","Urgente")
const tarea3= new Tarea("Correr","Media")
const tarea4= new Tarea("Suegros","baja") */
/* console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea()); */

//Destructurign de objetos
//Como  sacas la info de un objeto
/* const aprendiendoJS={
    version:{
        nueva:"ES6",
        anterior:"ES5"
    },
    frameworks:["React","Vuejs","AngularJs"]

}
console.log(aprendiendoJS)

//Version anterior
//let version= aprendiendoJS.version.nueva;
//console.log(version)
//Nueva version
let{nueva}=aprendiendoJS.version
console.log(nueva) */

//Object literla enhancement

/* const band="Metallica"
const genero="Heavy Metal"
const canciones=["Master of puppest","Seek adn destroy","Enter Sandman"]
//Forma anterior
//const metallica={
//    banda:band,
//    genero:genero,
//    canciones:canciones
//}
const metallica={band,genero,canciones}
console.log(metallica) */

/* const persona={
    nombre:"Juan",
    trabajo:"Porgramador",
    edad:50,
    musicaRock:true,
    mostrarInformacion(){
        console.log("Lorep ipsum")
    }

    } */

//Arreglos  y map
/* 
const carrito=["Porducto1","Producto2","Producto3"]
console.log(carrito)
//const appContenedor=document.querySelector("#app")
//let html=``;
//carrito.forEach(producto=>{
//    html+=`<li>${producto}</li>`
//})
//appContenedor.innerHTML=html;
carrito.map(producto=>{
    return `El producto es `+producto;
}); */

/* //Object keys
const persona={
    nombre:"Juan",
    profesion:"Programador",
    edad:50
}
console.log(Object.keys(persona)) */

//Sprear operator

/* let lenguajes=["Javascript","PHP","Python"]
let frameworks=["React","Lavarel","Django"]
let  combinacion=[...lenguajes,...frameworks]
console.log(combinacion)
let nuevoArreglo=[...lenguajes]
console.log(nuevoArreglo)
//Manera nueva
let [ultimo]=[...lenguajes].reverse()
console.log(ultimo)
//
function suma(a,b,c){
    console.log(a+b+c)
}
let numero=[1,2,3]
suma(...numero) */


/* //find
const personas=[
    {nombre:"Sahid",edad:23,aprendiendo:"Javascript"},
    {nombre:"Elias",edad:18,aprendiendo:"PHP"},
    {nombre:"Manuel",edad:21,aprendiendo:"ADOBE"},
    {nombre:"Jean",edad:30,aprendiendo:"Python"},
    {nombre:"Vale",edad:35,aprendiendo:"Reactjs"}
]
const mayores=personas.filter(persona=>{
    return persona.edad>28
})
console.log(mayores)
//Reduce
let total= personas.reduce((edadTotal,persona)=>{
    return edadTotal+persona.edad;
},0);
console.log(total) */

//Promises(llamada asyncrono)
/* const aplicarDescuento=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let descuento=true;
        if (descuento) {
            resolve("Descuento a la aplicacion")
        }else{
            reject("No se pudo aplicar el descuento")
        }
    },3000)
})
aplicarDescuento.then(resultado=>{
    console.log(resultado)
})

 */
/* const descargarUsuarios=cantidad=>new Promise((resolve,reject)=>{
    //Pasar la cantidad a la api
    const api =`https://randomuser.me/api/?results=${cantidad}`;
    //llamado ajax
    const xhr= new XMLHttpRequest();
    xhr.open("GET",api,true);
    xhr.onload=()=>{
        if(xhr.status==200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText))
    
        }
    }
    xhr.oneror=(error)=>reject (error);
    xhr.send()
    
    

})
descargarUsuarios(20).then(
    miembros=>imprimirHTML(miembros),
    error=> console.error(
        new Error("Huebo un error "+ error)
    )
)
function imprimirHTML(usuarios){
    let html="";
    usuarios.forEach(element => {
        html+=`<li>
                    Nombre: ${element.name.first} ${element.name.last}
                    email: ${element.email}
                    Imagen:
                    <img src="${element.picture.medium}">
                </li>
            `;
    });
    const contenedorApp=document.querySelector("#app");
    contenedorApp.innerHTML=html;
}
 */
//Clases
/* class Tarea{
    constructor(nombre, prioridad) {
        this.nombre=nombre;
        this.prioridad=prioridad;
        
    }
    mostar(){
        console.log(`el nombre es ${this.nombre}`)
    }
    
}

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super (nombre,prioridad)
        this.cantidad=cantidad
    }
}

let tarea1= new Tarea("Comer","Urgente")
let compra1=new ComprasPendientes("Jabon","Alta",6)
console.log(tarea1)
console.log(compra1) */
/* import {nombreTarea,crearTarea} from "./tareas.js"
console.log(nombreTarea)
const tara1=crearTarea("Hoajaa","Alta")
console.log(tara1) */
 import Tarea from "./tareas.js"
 const tarea1= new Tarea("Aprender Javascript","Urgente");
 tarea1.mostar()