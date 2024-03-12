/* estan tambien los operadores de 
SUMA(+), RESTA(-), MULTIPLICACION(*), DIVISION(/), MODULO(%)
incremento (++) y el operador de decremento (--),
i=i+1 // i++ / i-- 

//Hallar el impuesto por la compra de un computador sabiendo que el IVA es de 16% */


//let valorProducto = 3600000;
//let valorProducto= parseFloat(prompt("digite el valor del PC"));
const IVA = 0.16;

let productoConIva= (valorProducto*IVA)+ valorProducto;
//let total = valorProducto + productoConIva;
//console.log(productoConIva);
console.log(productoConIva.toFixed(2));
document.write("el valor del Pc + IVA es:" +productoConIva.toFixed(2));


document.write("--------------------------------"+"<br>");
document.write("EJER·#2");



document.write("--------------------------------"+"<br>");
document.write("EJER·#3");

/*Un atleta ah recorrido una distancia de 42.195 km, 
en un tiempo de 2 horas y 25 minutos. Hallar el tiempo de recorrido en distancia*/