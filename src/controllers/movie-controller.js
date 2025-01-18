import { Router } from 'express';
import { findMovie } from '../services/movie-service.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;
    //console.log(movieId);
    //TODO:  да отворим файла с филмите и да вземем детайлите на филма с намереното id
    const movie = findMovie(movieId);
    console.log(movie);
    
    res.render('details');
});

export default movieController;