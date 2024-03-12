
/*escriba un programa que calcule el indice de masa Corporal (IMC) de una persona 
y muestre el rango en el que se encuentra: bajo peso, normal, sobrepeso, u obesidad,
usa condicionales para mostrar el resultado adecuado segun el valor del IMC.*/

let Peso_Persona = parseFloat(prompt("digite su Peso:"))
let Altura_Persona = parseFloat(prompt("digite su Altura:"))

let Alturametros2 = 
let IMC= Peso_Persona/ Altura_Persona * Altura_Persona
let
console.log (IMC)
if (IMC < 18.5){
    console.log ("Bajo Peso");
}else{
    if (IMC>=18.5 && IMC <= 24.9){
        console.log("es normal");
    } else{
        if(IMC>25){
            console.log("sobrepeso")
        }
        }

}