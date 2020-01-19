const express = require('express');
const router = express.Router();
const weather = require('openweather-apis');

weather.setLang('pt');
weather.setUnits('metric');
weather.setAPPID('b07013ec45c6a1b76b1ee881ed797873');

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Teste API weather OK!'
    })
});

router.get('/:location', (req, res, next) => {
    const location = req.params.location;
    weather.setCity(location);

    weather.getTemperature(function(err, temp){
        if(err){
            res.status(400).send({
                mensagem: 'Erro: '+err
            })
        }else{
            res.status(200).send({
                mensagem: location+': '+temp,
                location: location,
                temp: temp
            })
        } 
    });
})

module.exports = router;