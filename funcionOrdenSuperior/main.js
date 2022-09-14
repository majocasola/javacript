// Funciones de Orden Superior

//funcion callback

function porCadaUno(arr, fn){
    for (const el of arr){
        fn(el);''
    }
}

porCadaUno([1,2,3,4], console.log) 

function porOtro(arr){
    for (let i =0; i <arr.length; i++){
        //alert(arr[i]);
    }
}

porOtro([8,9,7]);


// es lo mismo que lo anterior
function callback(arr, aplicarFuncion){
    for (let i = 0; i < arr.length; i++){
    //alert(arr[i]);
    //console.log(arr[i]);
    aplicarFuncion(arr[i]);
    }
}

callback([58,68,78,98], console.log);



function tripleConsoleLog (x){
    console.log(x)
    console.log(x)
    console.log(x)
}

tripleConsoleLog(5)


callback([2,3,4], tripleConsoleLog)


// forEach
console.log('forEach')

let myArray = [1,2,3,4,5];

myArray.forEach((item) => {
    console.log(item);
});

console.log('triple console.log')

myArray.forEach((item) => {
   tripleConsoleLog(item);
});


// find

console.log('find')


let alumnos = ['moni', 'guille', 'raul;']

const alumnoEncontrar = 'moni';

const encontrado = alumnos.find((item) => item == alumnoEncontrar)

console.log(encontrado)

// metodo Filter

console.log('metodo filter')

let gente = [
    {nombre: 'miguel', edad: 45},
    {nombre: 'sergia', edad:35},
    {nombre: 'rosario', edad:47},
    {nombre: 'sergia', edad:55}
];

const filtrados = gente.filter((persona)=> persona.edad> 35);
const filtradito = gente.filter((persona)=> persona.nombre == 'sergia');

console.log(filtrados);
console.log(filtradito);


// metodo Some() funciona igual que el find() recibiendo una funcion de busqueda. En vez de retornar el elemento encontrado, some() retorna true o false segun el resultado de la iteracion de busqueda

console.log('metodo Some')

const hayAlguno = gente.some((persona) => persona.nombre == 'sergia');
const hayOtra = gente.some((persona) => persona.nombre == 'majo');
console.log(hayAlguno);
console.log(hayOtra);


// metodo MAP()  crea un nuevo array con todos los elementos del original transformados segun las operaciones de la funcion enviada por parametroi. Tiene la misma cantidad de elementos pero los almacenados son el return de la funcion

console.log('metodo MAP')

const cursos = [
    {nombre: 'javascript', precio: 15000, tipo:'programacion'},
    {nombre: 'rectJs', precio: 25658, tipo:'programacion'},
    {nombre: 'angular', precio: 56897, tipo:'programacion'},
    {nombre: 'desarrollo web', precio:3636, tipo:'programacion'}
];
console.log(cursos);

const nombreCurso = cursos.map ((el) => {
    // lo cambia por otro, el return lo cambia
    return el.nombre; // o sea pisa el array completo y solo ahora guarda el nombre, el precio ya no esta
});

// se usa para dejar solo lo que quiero

const cambio = cursos.map((ele ) => '')

console.log(nombreCurso); // aca devuelve los nombres de los cursos

console.log(cambio); // aca me devuelve todo ' '
// el es elemento o se pone siempre item
const otro = cursos.map((el) =>{
    return {nombre: el.nombre, precio: el.precio*1.21, price:el.precio};
});

console.log(otro);

console.log('metodo REDUCE')

// metodo REDUCE()  permite obtener un unico valor tras iterar sobre el array. Funciona como un metodo que resume el array a un unico valor de retorno
// ejemplo, cuando queremos acumular la suma de alguna propiedad de los elementos, o cuando deseamos obtener algun resultado general sobre todo el array
// reduce y te da un SOLO VALOR

const numeritos = [1,2,3,4,5,6];
const totalidad = numeritos.reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(totalidad);

// En el siguiente caso podria, pensando como ejemplo en un simulacro de compra, sumar el precio de todos los productos elegidos


// para sumar el precio del carro de un array
const miCompra = [
    { nombre: 'desarrolo web', precio: 2566},
    { nombre: 'reactjs', precio: 854},
    { nombre: ' mern', precio: 8745}
]
// acc acumulador
const totall = miCompra.reduce((acc,el) => acc+ el.precio, 0)
console.log(totall)

/*

el acumulador, lo que quiero que acumule (el precio), desde que valor quiero que arrance el acumulador
total = 0
total = 0 + 2566
total = 0 + 2566 + 854
total = 0 + 2566 + 854 + 8745

*/ 


// metodo SORT() nos permite reordenar un array segun un criterio que definamos. Recibe una funcion de comparacion por parametro que, a la vez, recibe dos elementos del array. La funcion retorna un valor numerico (1, -1, 0) que indica qué

console.log('metodo SORT')

// para ORDENAR un array por algun string, debemos definir una funcion comparadora que retorne un valor numerico de referencia, segun queramos el orden ascendente o descendente
// te cambia todo el array
const items = [
    {name: 'pikachu', price:21},
    {name:'chrmander', price: 37},
    {name: 'pidgey', price:45},
    {name: 'squirtle', price:60},
];
console.log(items);

// a y b son items, ejemplo a es el primer elemento del array, y b el ultimo elemento (name:'pikachu', price:21) (name:'squirtle', price:60) en este caso lo ordeno por orden alfabetico
 
items.sort((a,b) => {
    if (a.name > b.name){
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
});

console.log(items)

// ahora lo ordeno por precio

items.sort((item1,item2) => {
    if (item1.price > item2.price){
        return 1;
    }
    if (item1.price < item2.price) {
        return -1;
    }
    // a es igual a b
    return 0;
});

// ordeno (y lo cambio para siempre) el array de items de acuerdo a 
console.log(items) // todos los console.log(items) me dan el mismo resultado ya que el ultimo sort() es el que cuenta


// metodo MAP() funciona como un contenedor de herramientas y metodos para realizar operaciones matematicas
console.log('metodo MAP');

// Propiedades: se puede acceder a algunas constantes matematicas a traves del objeto Math, como pueden ser el numero PI o la constante de Euler:
//  console.log( Math.E)    2.718281828459045
//  console.log( Math.PI)   3.141592653589793


// Los metodos de Math.min() y Math.max() reciben una serie de argumentos numericos y devuelven aquel de valor maximo o minimo, segun corresponda

console.log(Math.max(55,123,123,123,123,13))  // 123
console.log(Math.min(55,13,0,-25,93,4)) // -25

// CEIL, FLOOR & ROUND  sirven para redondear un valor numerico a un numero entero cercano

const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual mas proximo (arriba)
console.log('CEIL')
console.log(Math.ceil(pi));

// FLOOR: devuelve el entero mas cercano redondenado hacia abajo
console.log('FLOOR')
console.log(Math.floor(pi));

// ROUND: retorna el valor de un numero redondeando al entero mas cercano
console.log('ROUND')
console.log(Math.round(pi));


// SQUARE ROOT el metodo Math.sqrt() retorna la raiz cuadrada de un numero. Si se le envia un numero negativo, el metodo retorna NaN.

console.log('SQUARE ROOT');

const resulsquare = Math.sqrt(9)
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1) // 1
Math.sqrt(-1) // NaN
console.log(resulsquare)


// metodo RANDOM()  genera un numero pseudo-aleatorio entre 0 y 1, siendo el 0 limite inclusivo y el 1 exclusivo
console.log('RANDOM')
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

const j = Math.random(); // entre 0 y 1
console.log('entre 0 y 1');
console.log(j)// cada vez que ejecute cambia el numero entre 0 y 1
console.log('entre 0 y 9');
console.log(j * 10) // entre 0 y 9
console.log('entre 0 y 9.9', Math.round(j+10)) // 0 y 9.9


console.log('entre 20 y 29.9', Math.round(j *10 +20)) //entre 20 y 29.9
console.log('entre 20 y 30');
console.log(j * 10 + 20) // entre 20 y 30


// DATE   Instanciar un objeto DATE nos genera la fecha y tiempo actual:

console.log(new Date());

// la fecha de ahora en una variable:
const ahora = new Date()
console.log(ahora)

// La convencion con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los dias a partir del 1:

console.log(new Date(2020,1,15))

// es 11 porque va del mes 0 al 11-- 11 seria diciembre y 0 es enero
const casiNavidad = new Date(2021, 11, 24, 23, 59, 59)
console.log(casiNavidad)

// Tambien puede crear una fecha a partir de un string con formato especifico

const nocheBuena = new Date ('December 24, 2021 23:59:59')
console.log(nocheBuena)


// ejemplo valor singular

const hoy = new Date ('December 17, 2021');

console.log(hoy.getFullYear()); // 2021
console.log(hoy.getMonth()); // 11 (diciembre)
console.log(hoy.getDay()); // 5 viernes
console.log(hoy.getDate()); // me da la cantidad de dias 17

// ejemplo de presentacion

const today = new Date ('December 17, 2021');

console.log(today.toDateString()) // Fri Dec 17 2021
console.log(today.toLocaleString()) // 17/12/2021 00:00:00
console.log(today.toLocaleDateString()) // 17/12/2021
console.log(today.toTimeString()) // 00:00:00 GMT-0300 (hora estandar de Argentina)


// ejemplos de Diferencias entre fechas

const navidad = new Date('december 25, 2021');
const otraFecha = new Date('december 17, 2021');

console.log(navidad - otraFecha) // 691200000 la unidad mas baja que son milisegundos

const milisegundosPorDia = 86400000;

console.log((navidad - otraFecha)/ milisegundosPorDia) // 8


// ejemplo de diferencias entre fechas

const inicio = new Date ();


// saber cuanto tarda javascript en sacar en consola la frase haciendo timepo 5000 veces
for (let i = 0; i< 5000; i++){
    console.log('haciendo tiempo')
}

const final = new Date();
console.log('el proceso tardo: '+ (final-inicio)+ 'milisegundos') // el proceso tardo: X milisegundos







