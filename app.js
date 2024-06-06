


function recibir_informacion() {
    
    
    const nombre_usuario = document.querySelector("#nombre_usuario").value
    const contrasenia_usuario = document.querySelector("#contrasenia_usuario").value
    console.log(nombre_usuario);
    console.log(contrasenia_usuario);
    localStorage.setItem("nombre-usuario",JSON.stringify(nombre_usuario))
    localStorage.setItem("nombre-contrasenia",JSON.stringify(contrasenia_usuario))
    console.log( JSON.parse(localStorage.getItem("nombre-usuario")));
    console.log( JSON.parse(localStorage.getItem("contrasenia-usuario")));
let condicion_reciubida=JSON.parse(localStorage.getItem("nombre-usuario"))
    if(condicion_reciubida===)
    

}

