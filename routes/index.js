/** GET home page. */
let express = require('express');
const authUtils = require('../authUtils.js');
let router = express.Router();
const request = require('superagent');

router.get('/', async (req, res) => {
  if (req.session.discord === undefined) {
    return res.render('index', { login: false });
  }

  const token = await authUtils.token(req.session.discord);

  const [userRes, guildsRes] = await Promise.all([
    request.get('https://discordapp.com/api/users/@me').set('Authorization', `Bearer ${token.accessToken}`),
    request.get('https://discordapp.com/api/users/@me/guilds').set('Authorization', `Bearer ${token.accessToken}`)
  ]);

  const user = JSON.parse(userRes.text);
  const guilds = JSON.parse(guildsRes.text);

  return res.render('index', {
    login: true,
    user: {
      name: user.username,
      discriminator: user.discriminator,
      icon: user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`
        : `/assets/img/defguild.png`
    },
    guilds: guilds
      // Check for Manage Server permission
      .filter(it => (it.permissions & 0x00000020) === 0x00000020)
      .map(guild => {
        return {
          link: `https://discordapp.com/oauth2/authorize?` +
          `&client_id=201492375653056512` +
          `&scope=bot` +
          `&permissions=8` +
          `&guild_id=${guild.id}` +
          `&response_type=code` +
          `&redirect_uri=https://octave.gg`,
          icon: guild.icon
            ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`
            : `/assets/img/defguild.png`
        };
      })
  });
});

router.get('/login', (req, res) => {
  const uri = authUtils.discordAuth.code.getUri();
  res.redirect(uri);
});

router.get('/logout', (req, res) => {
  req.session.discord = undefined;
  res.redirect('/');
});

module.exports = router;
