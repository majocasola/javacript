// DOM

// Modelo de Objetos del Documento
// Document Objetc Model

// DOM es una estructura de objetos generada por el navegador, la cual representa la pagina HTML actual. Con Javascript la empleamos para acceder y modificar de forma dinamica elementos de la itnerfaz.
// document = DOM




// setTimeout(() => {
//     document.getElementById("titulo").innerHTML = "chau otra cosa";
// }, 2000);



// innerHTML significa HTML interior

//document.getElementById("titulo").innerHTML = "chau otra cosa";

// let div = document.getElementById('app');

// let parrafo = document.getElementById('parrafo1');

// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

//let nombre = prompt('ingrese nombre');
//let apellido = prompt('ingrese apellido');

//const nombreApellido = nombre + ' ' + apellido;

//document.getElementById('resultado').innerHTML = nombreApellido

// let paises = document.getElementsByClassName('paises');

// // para cambiar uno solo
// paises[1].innerHTML = ('paraguay')


// // para cambiar todos
// // for (let i = 0; i < paises.length; i++) {
// //     paises[i].innerHTML = 'otra cosa'
// // }

// // para agregar algo a todos
// for (let i = 0; i < paises.length; i++) {
//     paises[i].innerHTML = paises[i].innerHTML + '!'
// }


// let divs = document.getElementsByTagName('div');


// divs[0].innerHTML = 'otra cosa';

// let ps = document.getElementsByTagName('p');

// //ps[1].className = 'contenedorActivo';

// setTimeout(() => {
//     ps[0].className = 'contenedorActivo'
// }, 1000);

// setTimeout(() => {
//     ps[1].className = 'contenedorActivo'
// }, 2000);

// setTimeout(() => {
//     ps[2].className = 'contenedorActivo'
// }, 3000);



// const productos = [
//     { id: 100, nombre: 'zapatos adidas', precio: 100 },
//     { id: 101, nombre: 'zapatos nike', precio: 120 },
//     { id: 102, nombre: 'zapatos puma', precio: 42500 },
//     { id: 103, nombre: 'vestido', precio: 360 },
// ]

// const producto1 = '<div><h3>' + productos[0].nombre + '</h3><p>Precio: $' + productos[0].precio + '</p><p>Id: ' + productos[0].id + '</p></div>';

// document.getElementById('div1').innerHTML = producto1;

// const producto2 = '<div><h3>' + productos[1].nombre + '</h3><p>Precio: $' + productos[1].precio + '</p><p>Id: ' + productos[1].id + '</p></div>';

// document.getElementById('div2').innerHTML = producto2

// const producto3 = '<div><h3>' + productos[2].nombre + '</h3><p>Precio: $' + productos[2].precio + '</p><p>Id: ' + productos[2].id + '</p></div>';

// document.getElementById('div3').innerHTML = producto3

// function mostrarProductosEnDom() {

//     let html = '';
//     for (let i = 0; i < productos.length; i++) {
//         html = html + '<div><h3>' + productos[i].nombre + '</h3><p>Precio: $' + productos[i].precio + '</p><p>Id: ' + productos[i].id + '</p></div>';
//     }

//     console.log(html)

//     document.getElementById('contenedor-productos').innerHTML = html;

// }

// mostrarProductosEnDom();


// CUANDO EN EL HTML NO HAY NADA Y HAY QUE CREARLO DESDE JS


let parrafo = document.createElement('p');
// Insertar HTML interno
parrafo.innerHTML = "<h2> Hola coders</h2>";
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);

//document.getElementById('fuera').remove();
// otra forma

const fuera = document.getElementById('fuera');
fuera.remove();


// Plantillas literales E innerHTML



const productos = [
    { id: 100, nombre: 'zapatos adidas', precio: 100 },
    { id: 101, nombre: 'zapatos nike', precio: 120 },
    { id: 102, nombre: 'zapatos puma', precio: 42500 },
    { id: 103, nombre: 'vestido', precio: 360 },
]


// function mostrarProductosEnDom() {
//     let html = '';
//     for (let i = 0; i < productos.length; i++) {
//         html = html +
//             `<div>
//                 <h3>${productos[i].nombre}</h3>
//                 <p>Precio: $ ${productos[i].precio}</p>
//                 <p>Id: ${productos[i].id} </p>
//             </div>`;
//     }

//     document.getElementById('contenedor-productos').innerHTML = html;
// }

// mostrarProductosEnDom();



// con otro for 

function mostrarProductosEnDom() {
    let html = '';
    for (const producto of productos) {
        html = html +
            `<div>
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $ ${producto.precio}</p>
                    <p>Id: ${producto.id} </p>
                </div>`;
    }

    document.getElementById('contenedor-productos').innerHTML = html;
}

mostrarProductosEnDom();



// QUERY SELECTOR

// puedo seleccionar la etiqueta <p>  siguiendo la sintaxis de CSS para selectores
let query = document.querySelector('#contenedor-query p')

// seleccionar solo el contenedor por id con #
let contenedor = document.querySelector('#contenedor-query')

// o por clase
query = document.querySelector('.texto')