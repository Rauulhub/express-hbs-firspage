const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'content-Type': 'application/Json' });
    let salida = {
            nombre: 'Raul',
            edad: 24,
            url: req.url
        } //objeto json
    res.write(JSON.stringify(salida)) //convierte a Json string e imprime
        //res.write('hola mundo');
    res.end()
})

.listen(8080); //lee el localhost:8080
console.log('escuchando puerto 8080');