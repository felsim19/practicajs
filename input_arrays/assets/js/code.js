let usuarios = ["juan", "julian", "felipe" ,"sandra", "mireya", "yeimi"]
console.log (usuarios)

function agregacion_arrays () {
    let datoarray = document.querySelector ("#datos").value
    usuarios.splice(usuarios.indexOf ("juan") + 1, 0, datoarray)
console.log (usuarios)
}