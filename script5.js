let persona = {
    nombre : "Angel",
    apellido : "Buitrago",
    edad : 32,
    info : function(){
        for (clave in persona){
            console.log(clave);
            console.log(persona[clave]);
        }
    },
    info1 : function(){
        console.log("Mi nombre es "+this.nombre+" "+this.apellido+" y tengo "+this.edad+" años");
    }
}