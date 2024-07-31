const cardExpo = document.getElementById('cardExpo');
function cardGenerator(movie){
    
    const movieItem = document.createElement('movie');
    
    movieItem.classList.add('col-md-auto');
    movieItem.innerHTML =`
        <div class="card" " style="background-color: #32325600; border: none; width: 20em;">
            <div class="card-body">
                <div id="imgCard" class="align-items-top">
                    <img src="${movie.poster}" alt="${movie.title}} Poster" class="card-img-bottom"></img>
                </div>
                <h5 class="card-title">${movie.title}</h5>
                <ol class="car-text">
                    <li class="car-text">Año: ${movie.year}</li>
                    <li class="car-text">Director: ${movie.director}</li>
                    <li class="car-text">Duracion: ${movie.duration}</li>
                    <li class="car-text">Género: ${movie.genre.join(' - ')}</li>
                    <li class="car-text">Rating: ${movie.rate}</li>
                </ol>
            </div>
        </div>
    `;
    cardExpo?.appendChild(movieItem);
}
module.exports = cardGenerator;
//                    <li id="spaceTxt" class="car-text">Descripcion: ${movie.description}</li>