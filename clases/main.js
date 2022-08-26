// CLASES    JS  ES6

class Persona {
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }    
    // metodo hablar
    hablar(){
        console.log('hola soy '+ this.nombre);
    }
};

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 742');


const majo = new Persona('majo', 34, 'cordoba 432');

majo.hablar();


