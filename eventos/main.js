// EVENTOS

// Controlan acciones de los usuarios, y definen un comportamiento de la pagina o aplicacion cuando se producen

// Se llaman event handlers (manejadores de eventos)


// JavaScript lo que nos permite hacer es escuchar eventos sobre elementos seleccionados. Cuando escuchamos el evento que esperamos, se ejecuta la funcion que definimos en respuesta. 

//A esta escucha se la denomica event listener


// PRIMERA OPCION  -------------------------

// function handleClickBotonPrincipal() {
//     console.log('handleClickBotonPrincipal')
// }

// function handlerAlgo() {
//     console.log('algo')
// }

// let boton = document.getElementById('btnPrincipal');
// boton.addEventListener('click', handleClickBotonPrincipal)


// let div = document.getElementById('div-principal');
// div.addEventListener('mouseover', handlerAlgo)


// OPCION 2  mas usada----------------------------------

// let boton = document.getElementById('btnPrincipal');

// boton.onclick = () => {
//     console.log('boton onCLick');
// }


// OPCION 3  ------------------------------------------------

// se escribe directamente en el HTML

// function funcionCualquiera() {
//     console.log('tercera opcion')
// }

// const btn = document.getElementById('btnPrincipal');

// btn.onclick = () => {
//     console.log('le hicieron click')
// }

// btn.onmousemove = () => {
//     console.log('me pasaron por arriba')
// }

// const nombre = document.getElementById('nombre');
// const edad = document.getElementById('edad');

// nombre.onkeyup = () => {
//     console.log('solto la tecla')
// }

// nombre.onkeydown = () => {
//     console.log('presiono la tecla')
// }

// // para corregir si esta bien 
// nombre.onchange = () => {
//     console.log('se fue del campo')
// }

// nombre.oninput = () => {
//     console.log('ingreso algo nuevo')
// }

// INFORMACION DEL EVENTO

// En algunos casos, necesitamos obtener informacion contextual del evento para poder realizar acciones.
// Por ejemplo, ante el evento submit necesitamos prevenir el comportamiento por defecto para operar correctamente.

// Para esto existe en JavasCript el objeto event
// con e o evento o cualquier letra, se usa por convencion, se puede ver el evento en si

// nombre.onkeydown = (e) => {
//     console.log(e)
// }

// Ejemplo aplicado: Datos del formulario usando event

// let miForm = document.getElementById('formulario');

// miForm.addEventListener('submit', validarFormulario);
// // en este caso el e.target es el formulario
// function validarFormulario(e) {
//     // Cancelamos el comportamiento del evento
//     e.preventDefault();
//     // Obtenemos el elemento desde el cual se disparo el evento
//     let formulario = e.target
//         // Obtengo el valor del primer hijo <input type='text'>
//     console.log(formulario.children[0].value);
//     // Obtengo el valor del segundon hijo <input type='number'>
//     console.log(formulario.children[1].value);
// }

// las posiciones es porque en el formulario en la posicion 0 esta el nombre en al 1 esta edad y la 2 es el submit
// es para saber si todo esta lleno, si falta algun dato se puede pedir que se complete todo antes del envio



// otra forma mas simple de enviar un formulario
// lo ideal es usar el eventListener

function controlarFormulario() {
    // aca se toma y se guarda en una variable el valor que tiene el id 'name'
    const nombr = document.getElementById('name').value;
    const celu = document.getElementById('cel').value;

    //console.log(nombr, celu)
    document.getElementById('resul').innerHTML = 'Gracias por completar tus datos' + ' ' + nombr + ' ' + celu;

}