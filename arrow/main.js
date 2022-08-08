// Diferencias funcion y flecha

// DECLARAR FUNCION DE FORMA CLASICA
function suma (a,b){
    return a+b;
}

// DECLARAR LA MISMA FUNCION PERO EN SINTAXIS FLECHA v1
const sumando = (a,b) => {
    return a + b;
}

// DECLARAR LA MISMA FUNCION PERO EN SINTAXIS FLECHA v2
const sumar = (a,b) => a +b;

// DECLARAR LA MISMA FUNCION PERO EN SINTAXIS FLECHA v2
const mostrar = msg => console.log(msg);
let resultado = sumar (10, 10);
console.log(resultado);

// las siguientes sentencias hacen lo mismo

/*
x = x +1;
x + 1;
x++;
*/

