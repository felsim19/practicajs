function agregar_nu_1() {
    let cantidadusuario = document.getElementById ("punto_1").value
    let resultado = 0
    for (let i = 1; i <= cantidadusuario; i++) {
        resultado = i + resultado
        console.log(resultado)
    }
    document.getElementById ("resultado").innerHTML = resultado

}


function validacion_nu_2 () {
    let validacionusuario = document.getElementById ("punto_2").value

    if(validacionusuario.value == "")  {
        alert ("por favor ingresa un dato") 
    }else{
        if(validacionusuario % 2 == 0){
            alert ("es par") 
        }else{
            alert ("es inpar")
        }
        console.log(validacionusuario)
    }
}

function validar_pu_3 () {
    let validacionedad = document.getElementById ("valedad").value
    if (validacionedad <= 10) {
        document.getElementById ("edad_pizzeria").innerHTML = "Felicidades reclama un jugo"
    }else{
        if (validacionedad <= 17 ) {
            document.getElementById ("edad_pizzeria").innerHTML = "Desafortunadamente no recibes ninguna bebida" 
        }else if(validacionedad >= 18 ){
            document.getElementById ("edad_pizzeria").innerHTML = "Felicidades reclama una cerveza"
        } 
    }


    let validaciongenero = document.getElementById ("valgenero").value
    if (validaciongenero == 1) {
        document.getElementById("genero_pizzeria").innerHTML = "Felicidades reclama una porción de pizza tres carnes"
    }else{
        validaciongenero == 2
        document.getElementById("genero_pizzeria").innerHTML = "Felicidades reclama una porción de pizza Hawaiana"
    }
}


function multiplicar_pu_5 () {
    let tabla = document.getElementById ("tabla_numero").value
    let cantidad = document.getElementById ("cantidad_numero").value
    let resultado_pu_5 = ""
    for (let i = 1; i <= cantidad; i++) {
        resultado_pu_5 = resultado_pu_5 + (tabla + "x" + i + "=" + (tabla*i) + "<br>")
        document.getElementById ("resultado_multiplicar").innerHTML = resultado_pu_5
        console.log(resultado_pu_5)
    }
}


function validacion_pu_6 () {
    let validacionmatricula = document.getElementById ("punto_6").value
    let matricula = 1000000
    if (validacionmatricula <= 2){
    document.getElementById ("valor_total").innerHTML = matricula
    }else{
        if (validacionmatricula <= 4){
            let descuento_caso_1 = 5
            let descuento_1 = (matricula * descuento_caso_1) /100
            matricula = matricula - descuento_1
        document.getElementById ("valor_total").innerHTML = matricula
        }else if(validacionmatricula >4 ){
            let descuento_caso_2 = 50
            let descuento_2 = (matricula * descuento_caso_2) /100
            matricula = matricula - descuento_2
        document.getElementById ("valor_total").innerHTML = matricula    

        }

 

    }
    
    
}
    