let express = require('express');
let router = express.Router();

let splash_texts = [
    "Meme Extraordinaire",
    "The Sarcastic yet Serious",
    "The Cooliest There Is",
    "Probably Tasty",
    "Jet Fuel Can't Melt Steel Memes",
    "Will Play Music for Food",
    "Discord-senpai... I...",
    "Finding the Rarest Pepe",
    "Alternative Bots",
    "90% Dank",
    "It's High Noon",
    "Aethex? More like ffline",
    "dabBot's dev is a fucking idiot",
    "The Free Version of MeeShit",
    "Ayana is my waifu",
    "Beemo broken? Use me!",
    "Rem... The Only Other Good Bot",
    "LewdBot is bae",
    "Eris copied the library's name!",
    "FredBoat <3",
    "SteamBot plz sponsor me",
    "rip BooBot",
    "Dyno is my best friend",
    "Nadeko's Dev is bae",
    "b1nzy plz nu r8 limit",
    "Spoopy is the meme lord",
    "TypicalBot is is typical yet good",
    "PvPCraft... Odd name, good bot",
    "Google Bot - The bot for people who don't want to open Chrome",
    "Miki, where are your commands?????",
    "Discoid plz spawnsur mi",
    "KawaiiBot kawaii af (✿◕‿◕)",
    "WildBot is gorgeous",
    "Tatsumaki is the Tentacle pornstar.",
    "GraveBot? Theme your bot after Graves plz",
    "DiscordRPG is actually impressive",
    "NotSoBot has an interesting icon",
    "Septapus' comic game op",
    "Marshmallow can we make smores together? <3",
    "OverwatchBot, over-hyped game, under-hyped bot",
    "Mirai? Like Mirai Nikki? Yuuuuuukiiiiiiiiii.",
    "DSL - Leaderboards",
    "What is a Hexacircle? That fucks my mind. Q.Q",
    "BakaBot, does JeromeASF sponsor you?",
    "ServerHound is beautiful, good boy!",
    "NapstaBot? Your name gives me Nostalgia from Napster.",
    "UB3R-B0T why the numbers? ._.",
    "SirBroBot⚔ is my bro",
    "Bonfire? Why name your bot Bonfire?",
    "CS-GO-STATS.net? Seriously? Now big sites are having global bots?",
    "RPBot, I'll be your King and you be my pet Cat",
    "PikaGirl kawaii desu",
    "BlargBot. Interesting name.",
    "deeBot is gr8",
    "Yggdrasil? That's my bb",
    "Oxyl - 'A compound or radical bound to an oxygen by a single bond'",
    "Ender is actually pretty decent",
    "RuneCord... Is RuneScape even going on still? (Also fix your site's SSL certificate)",
    "LapzBot is pretty cool",
    "Yuki-Chan. Are you Mirai's lover?",
    "Pandora - 'A burrowing bivalve mollusk with a fragile shell, the unequal values of which form a box with a lid'",
    "Mantaro? Like the lake?",
    "Xavio, pretty OG name",
    "Pollr is secksi like Abal"
];

/** GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        splash_text: splash_texts[Math.floor(Math.random() * splash_texts.length)]
    });
});

module.exports = router;
