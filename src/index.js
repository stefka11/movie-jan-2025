import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';  
import showRatingHelper from './helpers/rating-helper.js';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',   //задаваме да може да обработва с разширение hbs
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');    //hbs ще е дефолтния енжин
app.set('views', './src/views');  //указваме къде се намира папката views

//app.use(express.static('src/public')); //статичните файлове да са достъпни
app.use('/static', express.static('src/public')); //ако започва с /static – тогава го търси в src/public
app.use(express.urlencoded({extended: false}));  //задаване на express да парсва формата

app.use(routes);  

app.listen(5001, ()=> console.log('Server is listening at http://localhost:5001...'));

