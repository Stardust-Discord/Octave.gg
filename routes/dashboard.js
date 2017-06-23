"use strict";

let express = require('express');
let router = express.Router();

let credentials = require('../credentials');

const request = require('superagent');

let ClientOAuth2 = require('client-oauth2');

let discordAuth = new ClientOAuth2({
    clientId: '201492375653056512',
    clientSecret: credentials.clientSecret,
    accessTokenUri: 'https://discordapp.com/api/oauth2/token',
    authorizationUri: 'https://discordapp.com/oauth2/authorize',
    redirectUri: 'https://gnarbot.xyz/dashboard/callback',
    scopes: ['identify', 'guilds']
});

router.get('/login', (req, res) => {
    let uri = discordAuth.code.getUri();

    res.redirect(uri);
});

router.get('/callback', (req, res) => {
    discordAuth.code.getToken(req.originalUrl)
        .then(function (user) {

            // user.refresh().then(function (updatedUser) {
            //     console.log(updatedUser !== user); //=> true
            //     console.log(updatedUser.accessToken)
            // });

            // We should store the token into a database.
            //return res.send(user.accessToken)

            req.session.discordToken = user.accessToken;

            request.get('https://discordapp.com/api/users/@me')
                .set('Authorization', `Bearer ${user.accessToken}`)
                .end(function(err, res2) {
                    const json = JSON.parse(res2.text);
                    return res.end(`success! you'ved logged in! ${json.username}`);
                })
        })
});


router.get('/showYourToken', (req, res) => {
    res.end(req.session.discordToken)
});

module.exports = router;