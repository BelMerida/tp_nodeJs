const express = require('express');
const validacion = require('./validacion');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/personas'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());

app.get('/test', (req, res) =>{
    res.json({
        status: 'GET realizado',
    });
});

app.post('/personas', (req, res) => {
    validacion.validarDatos(req.body);
    
    const{nombre, apellido, dni} = req.body;

    var rp = require('request-promise');

    var options ={
        method: 'POST',
        uri: 'https://reclutamiento-14cf.firebaseio.com/personas.json',
        body: {
            nombre: nombre,
            apellido: apellido,
            dni: dni
        },
        json: true
    };

    rp(options)
        .then(function (parseBody) {
            console.log("Creado correctamente.")
        })
        .catch(function (err) {
            console.log("Error al crear.")
        });

        res.status(201).json({
            status: 'POST correcto.'
        });
});

app.use((error, req, res, next) =>{
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
});

app.listen(8000, () => console.log('Servidor inicializado en el puerto: 8000.'));
