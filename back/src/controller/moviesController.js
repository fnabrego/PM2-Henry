const { getMoviesService, createMoviesService, putMoviesService, deleteMoviesService} = require("../services/movieService");

module.exports = {    
    getMovies: async (req, res) => {
        try {
            const movies = await getMoviesService();
            res
            .json(movies);
            /* .send("Proximamente disponible los datos de películas..."); */
        } catch (error) {
            res
            .status(500)
            .json({
                message: error.message,
                error: error.message
            })
        }
    },
    createMovies: async (req, res) => {
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            const newMovie = await createMoviesService({title, year, director, duration, genre, rate, poster});
                res
                .status(201)
                .json(newMovie);
        } catch (error) {
            console.error("Error al crear la película:", error);
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
        }
    },
    putMovies: (req, res) => {
        res
        .send("Estas intentando un put");
    },
    deleteMovies: (req, res) => {
        res
        .send("Estas intentando un delete");
    }
};