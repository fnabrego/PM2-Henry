const axios = require("axios");
const URL = 'http://localhost:3000/movies';
const cardGenerator  = require("./renderCards");
const createMovie = require("./createMovie");
/* const URL = 'https://students-api.2.us-1.fl0.io/movies'; */

async function getMovies(){
    try {
        const {data} = await axios.get(URL);
        data.map(movie => cardGenerator(movie));
    } catch ({error}) {
        alert(error);
        console.error("Error al conectar servidor:", error);
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    getMovies();
    const submit = document.getElementById("formNew");
    submit?.addEventListener("submit", createMovie);
});
