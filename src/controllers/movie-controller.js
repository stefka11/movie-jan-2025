import { Router } from 'express';
import movieService from '../services/movie-service.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    //console.log('POST Movie');
    const newMovie = req.body;
    //console.log(req.body);
    movieService.create(newMovie);
    res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;
    //console.log(movieId);
    //TODO:  да отворим файла с филмите и да вземем детайлите на филма с намереното id
    const movie = movieService.findOne(movieId);
    //console.log(movie);
    //movie.rating
    
    res.render('details', { movie });
});

export default movieController;