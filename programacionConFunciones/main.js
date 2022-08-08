function saludar(nombre, apellido, idioma){
    let msg1 = "";
    if(idioma == "ingles"){
        msg1 = "Hello";
    }else{
        msg1 = "Hola";

    }
    let msg2 = "";
    if(idioma == "ingles"){
        msg2 ="see you later";
    }else {
        msg2 = "nos vemos despues";
    }
    const saludo = (`${msg1} ${nombre} ${apellido} ${msg2}`);

    return saludo;
}

function alertar(msg){
    alert(msg);
}

const saludando = saludar("maria", "casola", "ingles");
console.log(saludando);

alertar(saludando);


 