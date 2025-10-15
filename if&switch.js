// your code goes here
/*
if(condicion){
    //Se ejecuta esto si la condicion se cumple (true)
}else {
    //Se ejecutan las instrucciones en caso de que la condicion no se cumple (false)
}
*/

process.stdin.setEncoding('utf8');

var input_string = '';
process.stdin.on('data', function(data) {
    input_string += data;
    console.log("In scope: ", input_string)
});

process.stdin.on('end', function() {
    console.log(typeof(input_string))
    console.log("Input:   ", input_string);
    let n = Number(input_string);
    console.log(typeof(n));
    console.log(n);
    // Procesar el input_string aquí
    // Por ejemplo: let arr = input_string.split('\n');


    const a = n;
    let b = 8;
    if (a > b) {
        console.log(`${a} es mayor que ${b}`);
    } else if (a < b) {
        console.log(`${b} es mayor que ${a}`);
    } else {
        console.log(`${b} es igual ${a}`);
    }

});


////////////////////////////////////////////////////////////////////////

function casos(x){
switch (x) {
    case 0:
        console.log("caso 0, aquí se detiene el programa");
        break;
    case 1:
        console.log("caso 1, aquí se detiene el programa");
        break;
    case 2:
        console.log("caso 2, aquí se detiene el programa");
        break;
    default:
        console.log("No coincide con ningun caso"); 
}    
}

console.log(casos(1));
casos(2);


