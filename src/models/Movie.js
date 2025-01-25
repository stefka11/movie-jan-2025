import { Schema, model} from 'mongoose';

//Create schema - дефиниция на модела
const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageURL: String,
    rating: Number,
    description: String,
});

//Create model - самия модел
const Movie = model('Movie', movieSchema);

export default Movie;