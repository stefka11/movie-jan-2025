import { Router } from 'express';  
import homeController from './controllers/home-controller.js';

const routes = Router();   //създаваме нов модуларен раут

routes.use(homeController);  //Извикваме хом контролера, можем и други контролери по късно

routes.get ('*', (req, res) => {
    res.render('404');
});

export default routes;    //експортваме го