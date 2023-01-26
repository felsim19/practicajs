function calcular () {
    let valornumero = document.querySelector("#punto_1").value
    let resultado = 0
    if (valornumero != 1){
        if(valornumero % 2 == 0){
            console.log (valornumero)
            resultado = (valornumero/2)
            document.querySelector ("#resultado_punto_1").innerHTML = `su numero es ${resultado}`
            calcular (resultado)
        }else{
            resultado = (resultado * 3) + 1 
            document.querySelector ("#resultado_punto_1").innerHTML = `su numero es ${resultado}`
            calcular (resultado)
        }
    }
}
