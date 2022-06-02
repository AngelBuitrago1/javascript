alert ("A continuación ingrese dos números");
let A = prompt("Primer número: ");
let B = prompt("Ingrese el segundo número:");
let op = prompt("ahora Ingrese el signo de la operación a realizar (+, -, *, /)");
let resultado = 0;
let oper = null;
if (op == '+'){
    resultado = parseInt(A) + parseInt(B);
    oper = "suma";
}else if (op == '-'){
    resultado = parseInt(A) - parseInt(B);
    oper = "resta";
}else if (op == '*'){
    resultado = parseInt(A) * parseInt(B);
    oper = "multiplicación";
}else if ( op == '/'){
    resultado = parseInt(A) / parseInt(B);
    oper = "división";
}else {
    null;
}
var texto = ("Los números ingresados son "+A+" y "+B+" la operación es la "+oper+" y el resultado es "+resultado);
alert(texto);
console.log(texto);