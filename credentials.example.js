module.exports = {
    sessionSecret: 'something super duper secret',

    // Discord OAuth2 Credentials
    discordApp: {
        id: '', // Client ID
        secret: '', // Client Secret
        scopes: ['identify', 'guilds'], // OAuth2 Scopes
        redirectUri: 'https://your.website/dashboard/callback'
    }
}