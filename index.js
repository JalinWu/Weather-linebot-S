const result = require('dotenv').config();
if (result.error) throw result.error
const linebot = require('linebot');
const express = require('express');

const { weatherBot } = require('./resource/weatherBot');

// Line Channel info
const bot = linebot({
    channelId: process.env.LINE_CHANNEL_ID,
    channelSecret: process.env.LIEN_CHANNEL_SECRET,
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();
const app = express();

// for line webhook usage
app.post('/webhook', linebotParser);

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
});

weatherBot(bot);