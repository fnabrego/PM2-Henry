

function validateEntry({title,year,director,duration,genre,rate,poster}){
    if(!title || !year || !director || !duration || !genre || !rate || !poster)
        return "Todos los campos son obligatorios";
    //Añadir mas validaciones al ingreso de texto
    if(isNaN(rate)|| rate<1 || rate>10)
        return "El rating debe ser un numero entre 1 y 10";
    if(poster.includes('https://'))
        return "El poster debe ser una URL válida";

    return null;
}

function createMovie(event){
    console.log("Formulario enviado");
    event.preventDefault();
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value;
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;
    
    const newMovie = {title, year, director, duration, genre, rate, poster};
    
    const submit = document.getElementById('formNew');
    submit?.addEventListener('submit', createMovie);
    submit.addEventListener('reset', clearForm);
    function clearForm(){
    const inputs = document.querySelectorAll('newForm inputs');
        inputs.forEach(input =>{
            input.value = '';
        })
    }    
    const error = validateEntry({title, year, director, duration ,genre, rate, poster});
    if (error) return alert(error);

    axios.post("http://localhost:3000/movies", newMovie)
    .then(() => {
        alert("Película creada correctamente");
    })
    .catch((error) => {
        console.error("Error al crear la película:", error);
        alert("Error al crear la película. Consulta la consola para más detalles.");
    });
    console.log("Solicitud HTTP enviada");
    
    return alert("Datos correctos");
}
module.exports = createMovie;