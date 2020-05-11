const express = require('express');

const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middelwaer es un callback se ejecuta siempre da igual el url que la persona ponga
app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hello World')

    res.render('home', {
        nombre: 'Cecilia',

    });
});


app.get('/about', (req, res) => {
    //res.send('Hello World')

    res.render('about');
});
// esta funcion se hace cuando queremos tener otra direccion
/*app.get('/data', (req, res) => {
    //res.send('Hello World')

    res.send('Hola data');
})*/
app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));