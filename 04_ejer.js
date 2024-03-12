/*ejer desarrolla un algortimto que convierta una puntuacion numerica (0 a 100) en una calificacion 
cualitativa (A,B,C,D, F) usando condicionales. Por ejemplo 90- 100 es A, 80-89 es B, etc*/

let puntuacion = parseInt(prompt("Digite un nuemero[1 - 100]:"))

if (!isNaN(puntuacion)) {
    //console.log(puntuacion)
    if(puntuacion > 90 && puntuacion < 100){
    console.log ("usted pertenece a la categoria A")
  }else {
    if(puntuacion> 80 && puntuacion <= 89){
        console.log("usted pertenece a la categoria B")
    }
  }
}


