const ClientOAuth2 = require('client-oauth2');
const config = require('./config.json');

// swap to https://www.npmjs.com/package/simple-oauth2

const discordAuth = new ClientOAuth2({
  clientId: config.discordApp.id,
  clientSecret: config.discordApp.secret,
  accessTokenUri: 'https://discordapp.com/api/oauth2/token',
  authorizationUri: 'https://discordapp.com/oauth2/authorize',
  redirectUri: config.discordApp.redirectUri,
  scopes: ['identify', 'guilds']
});

async function token (obj) {
  const token = discordAuth.createToken(obj.accessToken, obj.refreshToken, obj.type);
  if (token.expired()) {
    return token.refresh();
  } else {
    return token;
  }
}

module.exports.discordAuth = discordAuth;
module.exports.token = token;
