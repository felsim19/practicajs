let url = "https://digimon-api.vercel.app/api/digimon"

let pedir = fetch(url)
pedir.then(res => res.json())
.then((informacion) => {
    informacion.forEach(personaje => {
        document.querySelector("#datainfo").innerHTML += `
              <div class="col">
              <div class="card w-75 card text-bg-danger mb-3">
                <img src="${personaje.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${personaje.name}</h5>
                  <p class="card-text">${personaje.level}</p>
                </div>
    
        `
    });
})  