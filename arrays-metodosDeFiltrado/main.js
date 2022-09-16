// After Arrays y Metodos de Filtrado
// entre los aprentesis del constructor van las propiedades
// siempre se respeta el mismo orden
class libro {
    constructor (nombre, categoria, autor, precio, disponibilidad, anio){
        this.nombre = nombre,
        this.categoria = categoria,
        this.autor = autor,
        this.precio = precio,
        this.disponibilidad = disponibilidad,
        this.anio = anio
    }

    // instanciamos un metodo:
    habilitar(){
        let error = 'libro disponible'
        if(this.disponibilidad==false){
            this.disponibilidad = true
        } else {
            console.log(error)
        }
    }

    deshabilitar(){
        let error = ' libro no disponible' 
        if(this.disponibilidad==true){
            this.disponibilidad = false
        } else {
            console.log(error)
        }
    }
}
// instanciamops los objetos con la palabra new (objetos porque tiene {}    )
let libro1 = new libro ('harry', 'ciencia ficcion', 'jk', 2500, true, 1990);
let libro2 = new libro('senior de los anillos', 'ciencia ficcion', 'tolkien', 2000, false,2010);
let libro3 = new libro('50', 'deama', 'desconocido', 1500,true,1888);
let libro4 = new libro(' titanic', 'drama','desconocido', 3500,false, 2035);
let libro5 = new libro('sherk', 'comedia','asd', 1500, true, 1580);
let libro6 = new libro('martin fierro', 'drama', 'jh',1500, true, 1990);


// libro es objeto, libreria es array
// array vacio

const libreria = [];

libreria.push(libro1,libro2,libro3,libro4,libro5,libro6);

// libro2.habilitar()

// console.log(libro2)
// libro1.habilitar()

// console.log(libro1)

// libro3.deshabilitar()
// console.log(libro3)

// libro1.deshabilitar()
// console.log(libro1)

// libro4.deshabilitar()
// console.log(libro4)

// .filer crea un nuevo array con todos los elementos que cumplen con la condicion
// disponibles es un nuevo array, es el nuevo array con todos los libros con la categoria disponibles

// let disponibles = libreria.filter(libro=> libro.disponibilidad== true)

// console.log(disponibles)

// // filatrar libros por precio

// let precioMenor3000 = libreria.filter(libro=> libro.precio < 3000)

// console.log(precioMenor3000)

// // .find devuelve un unico elemento, el primero que cumpla con la condicion

// // filtrar por autor

// let filtroAutor = libreria.find(libro => libro.autor == 'jk')

// console.log(filtroAutor)

// // imprimir libros por precio

// // Number parsea enteros y flotantes
// console.log('filtro por ingreso usuario')
// let ingreso = Number(prompt('ingresa el precio del libro'))

// let precioIngreso = libreria.filter(libro => libro.precio == ingreso)

// console.log(precioIngreso)

// ingreso de un nuevo libro con sus propiedades
// el confirm me da aceptar o cancelar, y luego eso me lo pasa a true o false

function agregarLibro(){
    let nombreNuevo = prompt('Ingrese nombre')
    let categoriaNueva = prompt('Ingrese categoria')
    let autorNuevo = prompt('Ingrese autor')
    let precioNuevo = Number(prompt('Ingrese el precio del libro'))
    let disponibilidadNueva = confirm('Ingrese la disponibilidad')
    let anioNuevo = Number(prompt('Ingrese el anio del libro'))
    let libroNuevo = new libro(nombreNuevo,categoriaNueva,autorNuevo,precioNuevo,disponibilidadNueva,anioNuevo)
    //para que el libro nuevo se agregue a libreria
    libreria.push(libroNuevo)

    // para ver todos los libros junto con el nuevo libro
    console.log(libreria)
}

// no sabemos cuantos libros quiere agregar el usuario

let cargarLibro = prompt("desea agregar un libro?").toLocaleUpperCase();

while (cargarLibro=='SI')
{
    agregarLibro()
    cargarLibro = prompt('desea agregar otro libro').toLocaleUpperCase()
}  




