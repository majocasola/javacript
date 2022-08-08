// 1)

let num1 = parseInt(prompt("Ingrese un numero menor a 10"));

let resultado = num1 + 10;

for (num1 >0; num1<=10; num1++){
    alert(`El numero mas 10 es igual a: ${resultado} `)
    break;
}

// 2)

let texto = prompt("Inrese un texto, para parar ingrese 'esc' ");

while (texto != "esc");
    switch (texto){
        case "hola":
            alert("ingreso hola, para parar ingrese 'esc'");
            break;
        case "chau":
            alert("ingreso chau, para parar ingrese 'esc'");
        break;
        case "vivi":
            alert("ingreso buenas, para parar ingrese 'esc'");
            break;
    }

    nombre = prompt ("ingrese un texto");