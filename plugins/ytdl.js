const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require ('yt-search')
cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("please give me url or title")
const search = await yts(q)
const deta =search.videos[0];
const url =deta.url 

let desc = `
🎵*BLACK-LEAUGE-MD SONG DOWNLOADER*🎵

title: ${deta.title}
description: ${deta.description}
time: ${deta.timestamp}
ago: ${deta.ago}
views: ${deta.views}

💻MADE BY ANILALOCHANA💻
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted.mek});
//download audio

let down = await fg.yta(url)
let downloadUrl down.dl_url

//send audio massage
await.conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})







  




  
}catch(e){
console.log(e)
reply('${e}')

}

})

