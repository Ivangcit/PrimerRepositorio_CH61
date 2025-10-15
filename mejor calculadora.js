// Hacer una calculadora
//DEclarar una funcion que reciba tres parametros 
//Operacion, numero 1 y numero 2
/*sugerencia de lista de operaciones
1 sum
2 rest
3 mult
4 div
5 cuadrado
*/
// segun la opcion se lleva a cabo la operacion
//mostrar en la consola los resultados d la operacion

// let op=prompt("Escribe la operacion");
// let n1= Number(prompt("Escribe el primer numero"));
// let n2= Number(prompt("Escribe el segundo numero"));
let op="suma";
let n1= 5;
let n2=7;
function operacion(op,n1,n2){
    switch(op){ 
case "suma":
console.log(n1+n2);
break;
case "resta":
console.log(n1-n2);
break;
case "multiplicacion":
console.log(n1*n2);
break;
case "division":
console.log(n1/n2);
break;
case "cuadrado":
console.log(n1*n1," y ",n2*n2);
break;
default:
console.log("No coincide con ningun caso, revise su escritura");
}
}

operacion(op,n1,n2);
