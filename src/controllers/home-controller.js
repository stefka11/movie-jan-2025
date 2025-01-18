import { Router } from 'express';

const router = Router();

// router.get('/modular-router', (req, res) => {
//     res.send('Modulare router');
// });

router.get ('/', (req, res) => {
    //res.send('It works!');
    //res.render('home', {layout: false});
    res.render('home');
});

router.get ('/about', (req, res) => {
    res.render('about');
});



export default router;