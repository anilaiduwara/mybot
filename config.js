const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",

};
