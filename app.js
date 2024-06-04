const leer = require("prompt-sync")();



function autetificaion() {
    let elemento_1 = 0;
    let elemento_2 = 0;
    let elemento_3 = 0;
    let elemento_4 = 0;
    let condicion_1 = false;
    let condicion_2 = false;

    elemento_1 = document.getElementById("usuario_registrado")
    elemento_2 = document.getElementById("pasword_registrado")
    elemento_3 = document.getElementById("inicia_sesion_nombre")
    elemento_4 = document.getElementById("inicia_sesion_pasword")

    condicion_1 = elemento_1 === elemento_3
    condicion_2 = elemento_2 === elemento_4

    if ((!condicion_1) && (!condicion_2)) {
        console.log("verifque sus datos");

    } else {
        console.log("bienvenido", elemento_1);
        
    }





}


autetificaion();