function ObtenerInfoPersonajes(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}

ObtenerInfoPersonajes(data => {

    data.results.forEach(Personajes => {

        const article = document.createRange().createContextualFragment( /*html*/ `
    <center>
    <div class="card mb-3" style="max-width: 540px;"> 
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${Personajes.image}" class="img-fluid rounded-start" style="width: 300px; height: 200px;">
    </div>
    <div class="col-md-8">
    <div class="card-body" 
     <b><h2>${Personajes.name}</h2></b>
     <br>
     <b><label>Estado: <label></b><span>${Personajes.status}</span>
     <br>
     <b><label>Especie: </label></b><span>${Personajes.species}</span>
     <br>
     <b><label>Genero: </label></b><span>${Personajes.gender}</span>
     </div>
    </div>
    </div>
    </div>
    </center>
     `);

        const main = document.querySelector("main");

        main.append(article);

    });
});