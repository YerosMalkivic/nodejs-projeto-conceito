const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');

const clientId = '3936e3ee3ca848d4b94a631f74e32a06';
const clientSecret = '9bc9659123564066a796da4ec61dfedd';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

function getTracks(tracks){
  var arrTracks = [];
    tracks.forEach(function(element, index, array){
      arrTracks.push(element.track.name);
    });
    return arrTracks;
}

spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The Spotify access token expires in ' + data.body['expires_in']);
      console.log('The Spotify access token is ' + data.body['access_token']);
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Teste API spotify OK!',
        accessToken: spotifyApi.getAccessToken()
    })
});

router.get('/pop', (req, res, next) => {
    spotifyApi.getPlaylist('37i9dQZF1DX6aTaZa0K6VA')
    .then(function(data) {
        res.status(200).send({
            mensagem: 'Playlist de POP',
            data: getTracks(data.body.tracks.items)
        });
      }, function(err) {
        res.status(400).send({
            mensagem: 'Erro: '+err
        })
      });
})

router.get('/rock', (req, res, next) => {
  spotifyApi.getPlaylist('37i9dQZF1DX4908CEYEdlz', {limit: 10})
  .then(function(data) {
      res.status(200).send({
          mensagem: 'Playlist de ROCK',
          data: getTracks(data.body.tracks.items)
      });
    }, function(err) {
      res.status(400).send({
          mensagem: 'Erro: '+err
      })
    });
})

router.get('/classic', (req, res, next) => {
    spotifyApi.getPlaylist('5R7gtLTxpmKpRRmdTzndOa')
    .then(function(data) {
        res.status(200).send({
            mensagem: 'Playlist de músicas clássicas',
            data: getTracks(data.body.tracks.items)
        });
      }, function(err) {
        res.status(400).send({
            mensagem: 'Erro: '+err
        })
      });
})

module.exports = router;