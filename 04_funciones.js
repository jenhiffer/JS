/* Mostrar por pantalla la cantidad de personas mayores de edad (>=18) de un 
total de N edades leidas desde teclado

let mayorEdad=0
let menorEdad=0

let edad = parseInt(prompt ("Digite la edad(0 para terminar:)"))

while (edad !="0") {
     if(edad >=18){
        //mayorEdad = mayorEdad+1
        mayorEdad++
     }else{
        menorEdad++
     }
     edad = parseInt(prompt("digite la edad (0 para terminar:"))
}
 document.write ("las personas con edades mayor a 18 o igual son:" +mayorEdad+"<br>")
 document.write (`las personas con edades menores a 18 son: ${menorEdad}`)

 */

 //crear la funcion

 function showMassage(){
     alert("Hola a todos!!")
 }

 /*showMassage()
//las variables que se trabajan en la funcion solo se reconocen dentro no por fuera 
// alert (numero1)
// alert (numero2)
let numero3

function suma (){
    let operacion = 0
    let numero1 = 15000
    let numero2 = 35000
    operacion = numero1 + numero2 +numero3
    alert (operacion)
}
suma ()
suma ()
*/

/*let numero1 = parseFloat(prompt("Digite el primer numero:"))
let numero2 = parseFloat(prompt("Digite el segudo numero:"))

function resta (num1, num2, operacion)
{
    if (!isNaN(num1)&& !isNaN(num2)){
        let operacion = num1 -num2
        alert ("El resultado de la resta es:" + operacion )
        } else {
              alert(`debe digitar un valor numerico ${num1 , num2}`)
        }
}

resta(numero1,numero2)*/



let numero1 = parseFloat(prompt("Digite el primer numero:"))
let numero2 = parseFloat(prompt("Digite el segundo numero:"))
let operacion = prompt("indique la operacion a realizar (+ * - / " )
function aritmetica (num1, num2, operacion){

    if (!isNaN(num1)&& !isNaN(num2) && operacion === "+"){
        let operacion = num1 + num2
        alert ("El resultado de la suma es:" + operacion )
    } else {
            if (isNaN(num1) && !isNaN(num2) && operacion==="-" ){
                let operacion = num1 -num2
                alert("el resultado de la resta es:"+ operacion)
            }
            else{
                alert (`debe digitar un operador valido ${operacion}`)
            }
        }
}
aritmetica(numero1, numero2, operacion)
