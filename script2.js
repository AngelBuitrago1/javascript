let A = prompt("Ingrese el valor máximo");
let B = parseInt(A);
let min = 0;
let texto = "";
while (min < B+1){
    if (min % 2 == 0){
        texto = texto + min +" ";
    }
    min = min + 1;
}

alert(texto);
console.log(texto);