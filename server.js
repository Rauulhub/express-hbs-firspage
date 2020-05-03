const express = require('express');
const hbs = require('hbs');
const app = express();
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public')); //llama la carpeta public
//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales'); // llama la caprtea views para los parciales
app.set('view engine', 'hbs'); //usa el hbs



app.get('/', (req, res) => {
    //    let salida = {
    //       nombre: 'Raul',
    //      edad: 24,
    //      url: req.url
    // }
    //res.send(salida);
    res.render('home', {
        nombre: 'raul'
            //anio: new Date().getFullYear()
    }); // la pagina con localhost:3000/ llama al hola mundo y le da nombre y fecha
    //res.render('home');
});
app.get('/data', (req, res) => {
    res.send('hola data');
}); // al link /data le imprime hola data
app.get('/about', (req, res) => {
    res.render('about', {
        //anio: new Date().getFullYear()
    });
}); // al link localhost:3000/about le imprime las imagenes
app.listen(port, () => {
        console.log(`escuchando puerto ${port}`);
    }) // escucha al puerto 3000 e imprime una confirmacion