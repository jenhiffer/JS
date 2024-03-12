/*solicitar un  numero primo e identificar si es primo*/

let primo = parseInt(promptDigite ("el numero a comprobar (primo):"))

let esPrimo= true
//0-1-2
if (primo<=1 ){
    esPrimo = false
}
if (primo%2==0){
    esPrimo = false
}

if (esPrimo==true){
    document.write("el numero es primo"+ primo+"<br>")
} else{
    document.write("el numero NO es primo"+ primo+"<br>")
}