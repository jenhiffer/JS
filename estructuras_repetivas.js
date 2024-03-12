/*crear una serie numerica en lista de 1 en 1 hasta numero indicado por el
 usuario */

 /*let serie= parseFloat (prompt("digite el numero para realizar la serie:"))
 let i = 0;
 while (i<serie){
    i=i+1
    document.write(i+",")
}
*/
let serieFor= parseFloat (prompt("digite el numero para realizar la serie:"))
//for(let index = 0; index< Array.length; index++){
 //   const element = Array[index];
 for (let index = 0; index < serieFor; index++){
    console.log(index)
 }

//ejercicio 4. Realizar un programa que permita ingresar el tipo de mascota 
//perro o gato y realizar el conteo de gatos y perros y la sumatoria de c/u

let ConteoGatos = 0
let ConteoPerros = 0
let EdadGatos = 0
let EdadPerros = 0

while(true) {
 let mascota = prompt("escriba el tipo de mascota(gato o perro)")
  if(mascota ==="0"){
     break;
  }else if (mascota==="perro"){
   let edad = parseInt(prompt("digite Edad: "))
   ConteoPerros = ConteoPerros + 1
   EdadPerros = EdadPerros+edad
  }else if (mascota==="gato"){
   let edad = parseInt(prompt ("digite Edad: "))
   ConteoGatos++
   EdadGatos=EdadGatos+edad
   }
}
document.write("la cantidad de perros es: "+ConteoPerros+"<br>")
document.write("la cantidad de gatos es: "+ConteoGatos+"<br>")
document.write("Suma edad de los perros es: "+EdadPerros+"<br>")
document.write("Suma edad de los gatos es: "+EdadGatos+"<br>")
   

