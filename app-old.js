const http = require('http');


// para despegar una pagina web, para solucionar que el codigo sea larga se crea express
http.createServer((req, res) => {
        res.writeHead(200, { 'Conten-type': 'application/json' });

        let salida = {
            nombre: 'Cecilia',
            edad: 28,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);


console.log('Escuchando el puerto 8080');