import express from 'express';

const app = express();

app.set('views', './src/views');  //указваме къде се намира папката views

app.get ('/', (req, res) => {
    res.send('It works!');
    //res.render('home', {layout: false});
});

app.listen(5001, ()=> console.log('Server is listening at http://localhost:5001...'));

