import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',   //задаваме да може да обработва с разширение hbs
}));
app.set('view engine', 'hbs');    //hbs ще е дефолтния енжин
app.set('views', './src/views');  //указваме къде се намира папката views

//app.use(express.static('src/public')); //статичните файлове да са достъпни
app.use('/static', express.static('src/public')); //ако започва с /static – тогава го търси в src/public


app.get ('/', (req, res) => {
    //res.send('It works!');
    //res.render('home', {layout: false});
    res.render('home');
});

app.get ('/about', (req, res) => {
    res.render('about');
});

app.get ('*', (req, res) => {
    res.render('404');
});


app.listen(5001, ()=> console.log('Server is listening at http://localhost:5001...'));

