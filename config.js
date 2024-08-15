const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/088eee81dd2454e580647.jpg" ,
ALIVE_MSG: process.env.ALIVE_MSG || "Hey, i am  HORIZON-MD Whats app bot i am alive now!"
};
