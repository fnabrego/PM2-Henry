const Movie = require("../Models/Movie");

module.exports = {
    getMoviesService: async ()=>{
        const allMovies = await Movie.find();
        return allMovies;
    },
    createMoviesService: async (movie)=>{
        //una funcion para añadir una pelicula a la base de datos y retornar nuevamente la base de datos
        //title, year, director, duration, genre, rate, poster
        const newMovie = new Movie(movie);
        const saveMovie = await newMovie.save();
        return saveMovie;
    }
/*     putMoviesService: async (mov)=>{
        //una funcion para actualizar una pelicula elegida en la base de datos, filtrando de alguna manera
        const allMovies = await Movie.find();
        
        return allMovies;
    },
    deleteMoviesService: async (mov)=>{
        //una funcion para filtrar una pelicula y poder eliminarla
        const allMovies = await Movie.find();
        
        return allMovies;
    } */
};