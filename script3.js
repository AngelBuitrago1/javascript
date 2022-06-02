function media(a, b , c){
    let result = "La media de los números ingresados es "+(a + b + c)/3;
    return result;
}
let a = prompt("Ingrese un número");
let b = prompt("Ingrese otro número");
let c = prompt("Ingrese el último número");
let A = parseInt(a);
let B = parseInt(b);
let C = parseInt(c);

console.log(media(A, B, C));