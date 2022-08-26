// CONDICIONALES

// let eleccion = prompt('Ingrese como esta el cielo: soledo, lluvioso, nevando o nublado');

// eleccion = eleccion.toLocaleLowerCase();
// let temperatura = +(prompt('Ingrese la temperatura: '))

// if (eleccion === 'soleado' && temperatura < 10) {
//     alert('Esta a '+ temperatura+' grados afuera - Soleado, pero frio.')
// } else if (eleccion === 'soleado' && temperatura < 25 && temperatura >= 10) {
//     alert('Esta a '+temperatura+' grados afuera - agradable y soleado.')
// } else if (eleccion === 'soledado' && temperatura >= 25) {
//     alert ('Esta a '+ temperatura+' grados afuera - Que calor!')
// } else if(
//     (eleccion === 'lluvioso' ||
//     eleccion === 'nevando' ||
//     eleccion === 'nublado') &&
//     temperatura > 25
// ) {
//     alert (`Esta a ${temperatura} grados afuera - Cielo: ${eleccion}. Caluroso`)
// } else if (
//     (eleccion === 'lluvioso'||
//     eleccion === 'nevando'||
//     eleccion === 'nublado') &&
//     temperatura <= 25 &&
//     temperatura > 10
// ){
//     alert(`Esta a ${temperatura} grados afuera - Cielo: ${eleccion}`)
// } else if (
//     (eleccion === 'lluvioso' ||
//     eleccion=== 'nevando' ||
//     eleccion === 'nublado')&&
//     temperatura <+ 10
// ){
//     alert(
//         `Esta a ${temperatura} grados afuera - muy frio. Cielo ${eleccion}`
//     )
// } else alert('Ingrese datos corrtectos') 


// SWITCH

// let expr = +(prompt('Ingrese la opcion: 1-Naranjas, 2-Manzanas, 3-Platanos, 4-Cerezas, 5-Mangos, 6-Papayas'))

// switch(expr) {
//     case 1:
//         alert('El Kg de Naranjas cuentas $40.5')
//         break
//     case 2:
//         alert('El Kg de Manzanas cuesta $45')
//         break
//     case 3:
//         alert('El Lg de Platanos cuesta $32.58')
//         break
//     case 4:
//         alert('El Kg de Cerezas cuesta $66.32')
//         break
//     case 5:
//         alert('El Kg de Mangos cuesta $78.36')
//         break
//     case 6:
//         alert('El Kg de Papayas cuentas $41.21')
//         break  
//     default:
//         alert("Lo lamentamos por el momento no disponemos de  "+ expr+ '.')
// } 


// FOR

// for (let i = 10; i >= 0; i--) {
//     alert(i)
// }

// mostrar numeros pares


// WHILE

// n = 0
// x = 0
// while (n < 3){
//     n ++;
//     x += n;
//     alert(n + ' '+x)
// }


// DO WHILE

// do
//    sentencia
// while (condicion)

// let resultado = '';
// let i = 0;

// do {
//     i = i + 1;
//     resultado = resultado + i;
// } while (i <5);
// alert (resultado)


// hacer un programa que lea n numeros y calcule el menor, el mayor y la media

let numero;
let sumatoria = 0;
let mayor = -Infinity;
let menor = Infinity;
let n = +(prompt('Ingrese cantidad de numeros'));


for (i=0; i<n; i++){
    numero = +(prompt('Ingrese un numero'));
    sumatoria += numero;
    if (numero > mayor) mayor = numero;
    if (numero < menor) menor = numero;
}
alert (`EL promedio de los numeros es: ${sumatoria/n}, 
El mayor es: ${mayor}, 
y el menor es: ${menor}`);

