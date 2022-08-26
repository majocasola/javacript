 // FuncionEs vs Objetos

// Variables vs Propiedades
// Funciones vs Metodos

function mostrarPersona(persona){
    //console.log(persona);
    //console.log('esta es la peersona que me pasaron' + ' '+ persona.nombre)
}

let persona = {nombre: 'majo', edad:34, dir: 'colombres 176', tel:156876754};

//mostrarPersona(persona)

// CONSTRUCTORES

// Funcion creadora de un Objeto
function Persona (nombre, edad, calle){
    this.nombre = nombre.trim(); // trim() para que no deje espacios si el nombre lo tiene entre las comillas
    this.edad = edad;
    this.calle = calle;
    this.extremidades = 4;
    this.logueado = false;

    //METODO PERSONA
    this.mostrarTodo = function (){
        console.log('esto es todo lo que tengo para mostrar ' + this.nombre + ' '+this.edad + ' '+ this.calle)
    }

    this.habla = function(){
        console.log('hola soy '+ this.nombre)
    };

    this.resetear = function(){
        this.nombre = ''; 
    this.edad = 0;
    this.calle = '';
    this.extremidades = 4;
    this.logueado = false;
    }
}

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 742');
const persona2 = new Persona(' Marge ', 36, 'Av. Siempreviva 742'); 

const majo = new Persona('majo', 34, 'cordoba 432');

console.log(persona1);
console.log(persona2.mostrarTodo());
persona1.mostrarTodo();
majo.mostrarTodo(); 
majo.habla();
persona1.mostrarTodo();
persona1.resetear();
persona1.mostrarTodo();

// Esto es previo a ES6-- luego viene CLASES