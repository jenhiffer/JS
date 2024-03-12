/* crea un programa que calcule la tarifa de un envio de un paquete segun su peso
Por ejemplo, menos de 2kg cuesta $5000, entre 2kg y 5Kg  cuesta $10000, y mas 
de 5kg cuenta $15000.*/

let tarifa = parseFloat (prompt("Digite el peso del paquete:"))

if (!isNaN(tarifa)) {
    //console.log(puntuacion)
    if(tarifa <= 2){
    console.log ("paquete cuesta 5000")
  }else {
    if(tarifa >=2 && tarifa <= 5){
        console.log("paquete cuesta 10000")
        
  }else {
    if (tarifa>5){
        console.log("paquete cuenta 15000")
    }
  }
}
}
