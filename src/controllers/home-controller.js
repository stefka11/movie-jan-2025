import { Router } from 'express';
//import movies from '../movies.js';
import movieService from '../services/movie-service.js';

const router = Router();

// router.get('/modular-router', (req, res) => {
//     res.send('Modulare router');
// });

router.get ('/', (req, res) => {
    //res.send('It works!');
    //res.render('home', {layout: false});
    //console.log(movies);
    const movies = movieService.getAll();
    res.render('home', { movies });
});

router.get ('/about', (req, res) => {
    res.render('about');
});



export default router;