function validarFormulario() {
    let inputCorreo = document.querySelector("#correoUsuario")
    let inputPassword = document.querySelector("#passUsuario")

    if (inputCorreo.value != '' && inputPassword.value != '') {
        validarUsuarios(inputCorreo.value, inputPassword.value)
    }
}


function validarUsuarios(usuario, pass) {
   let usuarioValido = "felipesierra49@gmail.com"
   let passValido =  "contraseña123"
   if(usuario == usuarioValido && pass == passValido){
    localStorage.setItem ("validacion", "correcta")
   }else{
    alert 
    ("Por favor ingrese sus datos correctamente")
   }
}