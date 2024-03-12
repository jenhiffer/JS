let saludo = "hola mundo";
console.log(saludo);

let nombre, apellido, direccion, telefono;

nombre = "Carlos Perez";
direccion = "carrera 18 No. 10-15";
telefono = "45643456465"; // numero entero
let salario = 1300000-45 // numero decimal
var profesion = "abogado"; 

console.log(nombre);
console.log(direccion);
console.log(telefono);
console.log(profesion);

// + concatena
document.write(nombre + "<br>");
document.write(direccion + "<br>");
document.write(telefono + "<br>" );
document.write(profesion + "<br>");

const COLOR_RED =  "#FFFFFF"
const PI = 3.1416
let estado = true; // variable Booleana
let accion = false ; // booleana 

// variable de tipo objeto
let persona = {
    nombre: 'Ana Milena', 
    edad: 21,
    direccion: "cra 4 No 10-20",
    salario: 1350000.24
};

console.log (persona.nombre)
console.log (persona.edad)
console.log (persona.direccion)
console.log (persona.salario)

// variables de array
let paises = ["Buenos Aires", "Lima", "Bogota", "Caracas"];
console.log(paises)
console.log(paises[1])

//operadores de Negacion
let pension = true;
console.log(!pension);
let X = false;
let Y = true;

// para utilizar el opereador y && 
console.log(X && Y);

//variable de tipo array
let horas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//console.log(horas); 
//index++
for (let index = 0; index < horas.length; index=index+1){
    console.log(horas[index]);
}


//variable de tipo JSON
var usuario = {
    nombre: "Juan",
    apellido: "perez",
    edad: 30,
    salario: 345674257.50
};

console.log(usuario);
console.log("Nombres:" + usuario.persona);
console.log("salario:" + usuario.salario);

