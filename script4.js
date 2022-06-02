function media(A){
    let suma = 0;
    for (const i of A) {
        suma = suma + i;
    }
    let media = parseInt(suma)/A.length;
    let result = "La media de los números ingresados es "+media;
    return result;
}
let a = [10,25,36];
console.log(media(a));