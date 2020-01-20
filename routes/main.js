const express = require('express');
const request = require('request');
const router = express.Router();

/* debug */
//const myaddress = 'http://localhost:3000';
/* prod */
const myaddress = 'https://igwp.herokuapp.com';

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Teste API principal OK!'
    })
});

router.get('/:location', (req, res, next) => {
    const location = req.params.location;

    var r_temp = request.get(myaddress+'/weather/'+location, {json: true},
    function(error, response, body){
        if(error)
            res.status(400).send({
                mensagem: 'Weather error. '+error,
                error: error
            })
    });

    r_temp.on('complete', function(data){
        temp = data.body.temp;

        if(temp > 25){
            genre = 'pop';
        }else if(temp <= 25 && temp >= 10){
            genre = 'rock';
        }else if(temp < 10){
            genre = 'classic';
        }

        var r_playlist = request.get(myaddress+'/spotify/'+genre, {json: true}, 
        function(error, response, body) {
            if(error)
                res.status(400).send({
                    mensagem: 'Spotify error. '+error,
                    error: error
                })
        });

        r_playlist.on('complete', function(data){
            res.status(200).send(data.body);
        });
    });
})


module.exports = router;