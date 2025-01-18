import { Router } from 'express';
import movieService from '../services/movie-service.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    console.log('POST Movie');
    
    console.log(req.body);
    
    res.end();
});

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;
    //console.log(movieId);
    //TODO:  да отворим файла с филмите и да вземем детайлите на филма с намереното id
    const movie = movieService.findOne(movieId);
    console.log(movie);
    
    res.render('details', { movie });
});

export default movieController;