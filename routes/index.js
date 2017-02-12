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
    "It's High Noon"
];

/** GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        splash_text: splash_texts[Math.floor(Math.random() * splash_texts.length)]
    });
});

module.exports = router;
