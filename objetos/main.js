 // Funcions vs Objetos

// Variavles vs Propiedades
// Funciones vs Metodos

function mostrarPersona(persona){
    //console.log(persona);
    //console.log('esta es la peersona que me pasaron' + ' '+ persona.nombre)
}

let persona = {nombre: 'majo', edad:34, dir: 'colombres 176', tel:156876754};

//mostrarPersona(persona)

// CONSTRUCTORES

// Funcion ceadora de un Objeto
function Persona (nombre, edad, calle){
    this.nombre = nombre.trim(); // trim() para que no deje espacios si el nombre lo tiene entre las comillas
    this.edad = edad;
    this.calle = calle;
    this.extremidades = 4;
    this.logueado = false;
}

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 742');
const persona2 = new Persona(' Marge ', 36, 'Av. Siempreviva 742'); 

console.log(persona1);
console.log(persona2);