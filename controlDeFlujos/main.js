let nombre = "majo";
let apellido = "casola";
let edad = prompt("ingrese su edad");

if (edad > 0 ){
    console.log(" naciste");

}else if (edad == 0){
    console.log("no cumpliste un mes");

}else if (edad<0){
    console.log("ingresaste mal tu edad");
    edad = prompt("ingrese su edad");
    if (edad <0){
        console.log("volviste a ingresar mal tu edad, te cerramos la cuenta");
    }
} else {
    console.log("sos mayor de 30");
}