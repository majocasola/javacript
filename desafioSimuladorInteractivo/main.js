// calculo de la compra

let ingreso= prompt("Por favor ingrese el monto de su compra");

function costo(valor) {
    let resultado = valor;

    if (valor > 1000) {
        resultado = valor * 0.75;
        alert("Se le realizo un 25% de descuento, su monto a pagar es de: " + resultado);

    } else if (valor == 1000) {
        resultado = valor * 0.90;
        alert("Se le realizo un 10% de descuento, su monto a pagar es de: " + resultado);
    } else if (valor < 1000) {
        alert("Su monto a pagar es de: " + resultado);
    } else {
        alert("El valor ingresado es incorrecto, recuerde que debe ingresar numeros positivos mayores a cero");
    }

    console.log(`debe pagar $${resultado}`)

}
costo(parseFloat(ingreso));





 