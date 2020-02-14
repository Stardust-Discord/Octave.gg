'use strict';

let express = require('express');
let router = express.Router();

const request = require('superagent');

const authUtils = require('../authUtils');

router.get('/callback', async (req, res) => {
  const token = await authUtils.discordAuth.code.getToken(req.originalUrl);

  console.log(token);

  req.session.discord = {
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
    type: token.tokenType
  };

  return res.redirect('/../');
});

router.get('/showGuilds', (req, res) => {
  if (req.session.discord === undefined) {
    return res.end('You\'re not logged in...');
  }

  authUtils.token(req.session.discord).then(token => {
    request.get('https://discordapp.com/api/users/@me/guilds')
      .set('Authorization', `Bearer ${token.accessToken}`)
      .end(function (err, res2) {
        if (err) {
          return res.end(`error stuff ${err}`);
        }

        const jsa = JSON.parse(res2.text);
        console.log(jsa);

        return res.render('guildsDebug', {
          guilds: jsa
            // Check for Manage Server permission
            .filter(it => (it.permissions & 0x00000020) === 0x00000020)
            .map(item => {
              console.log(item);
              return {
                link: `https://discordapp.com/oauth2/authorize?` +
                      `&client_id=201492375653056512` +
                      `&scope=bot` +
                      `&permissions=8` +
                      `&guild_id=${item.id}` +
                      `&response_type=code` +
                      `&redirect_uri=http://gnarbot.xyz`,
                icon: `https://cdn.discordapp.com/icons/${item.id}/${item.icon}.jpg`
              };
            })
        });
      });
  });
});

module.exports = router;
