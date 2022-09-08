// ARRAYS

const arrayA = [];
const arrayB = [1, 2];
const arrayC = ['C1', 'C2', 'C3'];
// const arrayD = [true, false, true, false];

// console.log(arrayB[1]);
// console.log(arrayB[7]); //undefined   no tiene nada en esa posicion


// const arrayNombres = ['juan', ' jose', 'lola'];

// const resultado = arrayC[0] + arrayNombres[0];
// console.log(resultado);

// Recorrer Arrays

const arrayE = [23, 12, 23];

// Agregar al array mas numeros   .push  lo agrega al final

arrayE.push(50);

// unshift  es como el push pero lo agrega en primer lugar 
console.log(arrayE)
arrayE.unshift(2);
arrayE.unshift(3);
console.log(arrayE)

// para Eliminar el primer elemento del array se usa metodo shift()
arrayE.shift()
console.log(arrayE)

// para Eliminar el ultimo elemento del array se usa metodo pop()
arrayE.pop();
console.log(arrayE)

// metodo splice()  eliminar uno o varios elementos de un array en cualquier posicion. Funcion con 2 parametros: el primero es el indice donde se ubica el metodo para trabajar y el segundo es la cantidad de elementos a eliminar desde esa posicion

arrayE.splice(1,2)
console.log(arrayE)


//const ingresoNumero = +(prompt('ingrese un numero'));
//arrayE.push(ingresoNumero);


for(let i = 0; i < arrayE.length; i++){
    console.log(arrayE[i]);
}

// metodo indexOf()  permite obtener el indice de un elemento en un array. Recibe por parametro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su indice. si el elemnto no existe nos retornara como valor: -1


console.log('metodo indexOf')
const nombres = ['Rita', 'Pedro', 'miguel', 'Ana'];

console.log(nombres.indexOf('Rita'));
console.log(nombres.indexOf('Ana'));

// metodo includes permite saber si un elemento que recibo por parametro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo

console.log('metodo includes')

console.log(nombres.includes('Rita'));
console.log(nombres.includes('Maria'));

const encontrado = nombres.includes('Rita')

if(encontrado){
    console.log('rita esta')
} else {
    console.log('error no puedo enviar a rita mail ')
}


// metodo reverse  invierte el orden de los elementos dentro de un array
console.log('metodo reverse')
console.log(nombres)
nombres.reverse()
console.log(nombres)



// ejemplo aplicado: cargar array con entradas

// Declaracion de array vacio y variable para determinar cantidad
/*
const listaNombres = [];
let cantidad = 5;

// Empleo de do...while para cargar nombres en el array por prompt () 
do{
    let entrada = prompt('Ingresar nombre');
    listaNombres.push(entrada.toUpperCase());
    //console.log(listaNombres.length()); esto me da error
} while (listaNombres.length != cantidad)

// Concatenamos un nuevo array de dos elementos

const nuevaLista = listaNombres.concat(['ANA', 'EMA']);

// Salida con salto de linea usando join

//alert(nuevaLista.join('\n'));
*/


// eliminar cualquier elemento

const apellidos = ['jorge', 'majo', 'maria', 'miguel'];

// recibo el elemento a borrar por parametro
function eliminar (apellido) {
    // busco su indice en el array
    let index = apellidos.indexOf(apellido)
    // si existe, o sa es distinto a -1, lo borro con splice
    if (index != -1){
        apellidos.splice(index, 1)
    }
}

console.log(apellidos)
eliminar('majo')

console.log(apellidos)


// Array de objetos
console.log('array de objetos')
// los arrays pueden usarse para almacenar objetos personalizados. Podemos asignar objetos literales o previamente instanciados en la declaracion del array o agregar nuevos objetos usando el metodo push y el constructor

const objeto1 = {id: 1, producto: 'Arroz'};
const productos = [objeto1, {id: 2, producto: 'Fideo'}];
productos.push({id:3, producto: 'Pan'})
console.log(productos)

for ( const itemEnIndice of productos){
    console.log(itemEnIndice.id);
    console.log(itemEnIndice.producto)
}

// Objetos, Producto y Array

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

// Declaramos un array de productos para alamacenar objetos
const products = [];
products.push(new Producto('harina', '125'));
products.push(new Producto('lenteja', '52'))
console.log(products)
products.push(new Producto('jugo', '78'));
console.log(products)
// Iteramos el array con for...of para modificarlos a todos


for (const i of products){
    i.sumaIva();
}

console.log(products)





