/*solicitar 3 calificaciones por teclado y obtener la nota fianal
1-40%
2-30%
3-30% */


let NotaUno= parseFloat(prompt("Digite la primera nota"));
let NotaDos= parseFloat(prompt("Digite la segunda nota"));
let NotaTres= parseFloat(prompt("Digite la tercera nota"));

if (NotaUno>=0 && NotaDos>=0 && NotaTres>=0){
   let NotasEstudiante= (NotaUno*0.4)+(NotaDos+0.3)+(NotaTres+0.3);
   console.log ("Nota definitiva es:"+ NotasEstudiante);
} 
else
{
    console.log ("verifique las notas ingresadas deben ser mayor o = a 0:");
}



