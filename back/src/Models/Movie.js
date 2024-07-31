const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require: true
    },
    genre:{ 
        type: [String],
        require: true
    },

    year: {
        type:Number,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    },
    rate: {
        type:Number,
        min:[1, "Mínimo"],
        max:[10, "Máximo"],
        require: true
    },
    poster: {
        type: String,
        unique: true,
        require: true,
        validate: {
            validator: function (input) {
                return input.includes("https://")
            },
            message: props =>`${props.value} no es una url válida`
        }
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;