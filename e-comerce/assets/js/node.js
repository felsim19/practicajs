let productos = [{
    Nombre: "Hamburguesa sencilla de carne",
    precio: "12000",
    imagen: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/09/receta-super-facil-de-carne-para-hamburguesa-suave.jpg",
    ingredientes: [
        { nombre: "pan", precio_unidad: 3500, precio_mayoritario: 2500, },
        { nombre: "queso", precio_unidad: 4000, precio_mayoritario: 3000, },
        { nombre: "carne", precio_unidad: 7500, precio_mayoritario: 6500, },
        { nombre: "tomate", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "cebolla", precio_unidad: 1500, precio_mayoritario: 1000, },
    ],
    id: 1
},
{
    Nombre: "Hamburguesa sencilla de pollo",
    precio: "14000",
    imagen: "https://i.ytimg.com/vi/X4C5QW7HCcA/maxresdefault.jpg",
    ingredientes: [
        { nombre: "pan", precio_unidad: 3500, precio_mayoritario: 2500, },
        { nombre: "queso", precio_unidad: 4000, precio_mayoritario: 3000, },
        { nombre: "pollo", precio_unidad: 9500, precio_mayoritario: 8500, },
        { nombre: "tomate", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "cebolla", precio_unidad: 1500, precio_mayoritario: 1000, },
    ],
    id: 2
},
{
    Nombre: "Hamburguesa especial de carne",
    precio: "18000",
    imagen: "https://www.saborusa.com/ec/wp-content/uploads/sites/3/2020/06/67.-Hamburguesa-de-carne.png",
    ingredientes: [
        { nombre: "pan", precio_unidad: 3500, precio_mayoritario: 2500, },
        { nombre: "queso", precio_unidad: 4000, precio_mayoritario: 3000, },
        { nombre: "carne", precio_unidad: 7500, precio_mayoritario: 6500, },
        { nombre: "tomate", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "cebolla", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "tocino", precio_unidad: 4500, precio_mayoritario: 4000, },
    ],
    id: 3
},
{
    Nombre: "Hamburguesa especial de pollo",
    precio: "20000",
    imagen: "https://i.ytimg.com/vi/X4C5QW7HCcA/maxresdefault.jpg",
    ingredientes: [
        { nombre: "pan", precio_unidad: 3500, precio_mayoritario: 2500, },
        { nombre: "queso", precio_unidad: 4000, precio_mayoritario: 3000, },
        { nombre: "pollo", precio_unidad: 9500, precio_mayoritario: 8500, },
        { nombre: "tomate", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "cebolla", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "tocino", precio_unidad: 4500, precio_mayoritario: 4000, },
    ],
    id: 4
},
{
    Nombre: "Hamburguesa super especial de carne",
    precio: "25000",
    imagen: "https://cecinasllanquihue.cl/blog/wp-content/uploads/2019/04/Todos.jpg",
    ingredientes: [
        { nombre: "pan", precio_unidad: 3500, precio_mayoritario: 2500, },
        { nombre: "queso", precio_unidad: 4000, precio_mayoritario: 3000, },
        { nombre: "porcion carne 1", precio_unidad: 7500, precio_mayoritario: 6500, },
        { nombre: "tomate", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "porcion carne 2", precio_unidad: 7500, precio_mayoritario: 6500, },
        { nombre: "cebolla", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "tocino", precio_unidad: 4500, precio_mayoritario: 4000, },
    ],
    id: 5
},
{
    Nombre: "Hamburguesa super especial de pollo",
    precio: "29000",
    imagen: "https://static.wixstatic.com/media/8e2424_b9932fb5bb28438e8042553c350cb451~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e2424_b9932fb5bb28438e8042553c350cb451~mv2.jpg",
    ingredientes: [
        { nombre: "pan", precio_unidad: 3500, precio_mayoritario: 2500, },
        { nombre: "queso", precio_unidad: 4000, precio_mayoritario: 3000, },
        { nombre: "porcion pollo 1", precio_unidad: 9500, precio_mayoritario: 8500, },
        { nombre: "tomate", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "porcion pollo 2", precio_unidad: 9500, precio_mayoritario: 8500, },
        { nombre: "cebolla", precio_unidad: 1500, precio_mayoritario: 1000, },
        { nombre: "tocino", precio_unidad: 4500, precio_mayoritario: 4000, },
    ],
    id: 6
}
]

let contenedorproductos = document.getElementById("grilla-productos")


for (const productohamburgesa of productos) {
    console.log(productohamburgesa.Nombre)
    let claseEspecial = (productohamburgesa.id == 6) ? "imagenEspecial" : ""
    console.log(claseEspecial)
    let listaIngredientes = ""
    for (const ingredientesHamburguesa of productohamburgesa.ingredientes) {
        listaIngredientes += `<li>${ingredientesHamburguesa.nombre}</li>`
    }
    contenedorproductos.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${productohamburgesa.imagen}" class="card-img-top m-auto w-50 ${claseEspecial}" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${productohamburgesa.Nombre}</h5>
                <p class="card-text text-center">$ ${productohamburgesa.precio}</p>
                <ul class="list-unstyled  d-flex flex-column justify-content-center align-items-center">
                    ${listaIngredientes}
                </ul>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="input-group mb-3 w-25">
                        <span class="input-group-text">-</span>
                        <input type="number" class="form-control" min="0">
                        <span class="input-group-text">+</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>    
    `
}