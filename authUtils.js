const ClientOAuth2 = require('client-oauth2');
const credentials = require('./credentials');

// swap to https://www.npmjs.com/package/simple-oauth2

const discordAuth = new ClientOAuth2({
    clientId: credentials.discordApp.id,
    clientSecret: credentials.discordApp.secret,
    accessTokenUri: 'https://discordapp.com/api/oauth2/token',
    authorizationUri: 'https://discordapp.com/oauth2/authorize',
    redirectUri: credentials.discordApp.redirectUri,
    scopes: credentials.discordApp.scopes
});

async function token(obj) {
    const token = discordAuth.createToken(obj.accessToken, obj.refreshToken, obj.type);
    if (token.expired()) {
        return await token.refresh();
    } else {
        return token;
    }
}

module.exports.discordAuth = discordAuth;
module.exports.token = token;