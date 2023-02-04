function apipokemon(url = "https://pokeapi.co/api/v2/pokemon", busqueda = false) {
    console.log(url)
    let consumo1 = fetch(url)
   
    consumo1.then(res => res.json())
        .then(infoapi => {
            document.querySelector("#datainfo").innerHTML = ""
            if (!busqueda) {
                for (const pokemon of infoapi.results) {
                    fetch(pokemon.url)
                        .then(res2 => res2.json())
                        .then(infopokemon => {
                            document.querySelector("#datainfo").innerHTML += `
                            <div class="col">
                            <div class="card card text bg-carta mb-3 border border-light border-5 rounded-1">
                            <img class= "rounded-1 w-75" style="width:18rem" src="${infopokemon.sprites.other["dream_world"].front_default}" class="card-img-top" alt="...">
                            <div class="card-body d-flex justify-content-between align-items-center flex-column"> 
                            <h5 class="card-title">${infopokemon.name}</h5>
                            <p class="card-text">${infopokemon.stats["0"].base_stat} ${infopokemon.stats["0"].stat.name} </p>
                            <p class="card-text">${infopokemon.stats["1"].base_stat} ${infopokemon.stats["1"].stat.name} </p>
                            <p class="card-text">${infopokemon.stats["2"].base_stat} ${infopokemon.stats["2"].stat.name} </p>
                            <p class="card-text">${infopokemon.stats["3"].base_stat} ${infopokemon.stats["3"].stat.name} </p>
                            <p class="card-text">${infopokemon.stats["4"].base_stat} ${infopokemon.stats["4"].stat.name} </p>
                            <p class="card-text">${infopokemon.stats["5"].base_stat} ${infopokemon.stats["5"].stat.name} </p>
                        </div>`
                               
                        })


                }
            } else {
                document.querySelector("#datainfo").innerHTML += `
                <div class="col">
                <div class="card card text bg-carta mb-3 border border-light border-5 rounded-1">
                <img class= "rounded-1 w-75" style="width:18rem" src="${infoapi.sprites.other["dream_world"].front_default}" class="card-img-top" alt="...">
                <div class="card-body d-flex justify-content-between align-items-center flex-column"> 
                <h5 class="card-title">${infoapi.name}</h5>
                <p class="card-text">${infoapi.stats["0"].base_stat} ${infoapi.stats["0"].stat.name} </p>
                <p class="card-text">${infoapi.stats["1"].base_stat} ${infoapi.stats["1"].stat.name} </p>
                <p class="card-text">${infoapi.stats["2"].base_stat} ${infoapi.stats["2"].stat.name} </p>
                <p class="card-text">${infoapi.stats["3"].base_stat} ${infoapi.stats["3"].stat.name} </p>
                <p class="card-text">${infoapi.stats["4"].base_stat} ${infoapi.stats["4"].stat.name} </p>
                <p class="card-text">${infoapi.stats["5"].base_stat} ${infoapi.stats["5"].stat.name} </p>
            </div>`
            }
            botones_paginacion(infoapi.next, infoapi.previous)
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El pokemon que busca no existe',
            })
        })
}

apipokemon()

document.querySelector("#btn-solicitud").addEventListener("click", () => {
    let urlapi = "https://pokeapi.co/api/v2/pokemon/"
    let filtrobusqueda = document.querySelector("#inputsearch").value

    if ((filtrobusqueda != "")) {
        let urlcompleta = urlapi + filtrobusqueda
        apipokemon(urlcompleta, true)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ponga algo en la busqueda',
        })
    }

   
})

function botones_paginacion(url_next, url_previous) {
    let disablebotonnext = (url_next == null) ? "disabled" : "";
    let disablebotonprev = (url_previous == null) ? "disabled" : "";
    document.querySelector("#btn_pagina").innerHTML = `
    <button class="btn bg-boton fs-1 " ${disablebotonprev} onclick="apipokemon('${url_previous}')">
    <i class="fa-regular fa-circle-left"></i>
    </button>
    <button class="btn bg-boton fs-1 " ${disablebotonnext} onclick="apipokemon('${url_next}')">
    <i class="fa-regular fa-circle-right"></i>
    </button>
    `


}