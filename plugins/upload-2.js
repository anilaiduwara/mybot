const config = require('../config')
const {cmd , commands} = require('../command')

const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')




cmd({
    pattern: "uploadme",
    react: "✔️",
    alias: ["upme"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*.🅄🄿🄻🄾🄰🄳🄼🄴   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
const data = q.split(" | ")[0] 
const datas = q.split(" | ")[1] 
const datase = q.split(" ¥ ")[1]
 await conn.sendMessage(from, { document : { url :  data } ,caption: data  ,mimetype: datas , fileName: `DOWNLOADED.${datase}` })
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadmovie",
    react: "✔️",
    alias: ["upmv"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, chat, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🅄🄿🄻🄾🄰🄳🄼🄾🅅🄸🄴   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
      

 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *🎬 𝓪𝓷𝓲𝓵𝓪 𝓵𝓸𝓬𝓱𝓪𝓷𝓪 🎬*`  ,mimetype: "video/mp4" , fileName: `🎬 MOVIE DOWNLOADER 🎬\n${datas}.mp4` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})


cmd({
    pattern: "moviekv",
    react: "✔️",
    alias: ["mkv"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, chat, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🄼🄺🅅   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
      

 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *🎬 𝓪𝓷𝓲𝓵𝓪 𝓵𝓸𝓬𝓱𝓪𝓷𝓪 🎬*`  ,mimetype: "video/mkv" , fileName: `🎬 MOVIE DOWNLOADER 🎬\n${datas}.mkv` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})					    

cmd({
    pattern: "uploadtv",
    react: "✔️",
    alias: ["uptv"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🅄🄿🄼🅅   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "video/mp4" , fileName: `📺 𝙖𝙣𝙞𝙡𝙖 𝙡𝙤𝙘𝙝𝙖𝙣𝙖 📺\n${datas}.mp4` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadtvm",
    react: "✔️",
    alias: ["uptvm"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🅄🄿🄻🄾🄰🄳🅃🄼   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "video/mkv" , fileName: `📺 𝙖𝙣𝙞𝙡𝙖 𝙡𝙤𝙘𝙝𝙖𝙣𝙖 📺\n${datas}.mkv` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadmoviem",
    react: "✔️",
    alias: ["upmvm"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🅄🄿🄻🄾🄰🄳🄼🄾🅅🄸🄴🄼   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *TECHNICAL CYBERS*`  ,mimetype: "video/mkv" , fileName: `🎬 𝙖𝙣𝙞𝙡𝙖 𝙡𝙤𝙘𝙝𝙖𝙣𝙖 🎬\n${datas}.mkv` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadzip",
    react: "✔️",
    alias: ["upzip"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🅄🄿🄻🄾🄰🄳🅉🄸🄿   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `\n${datas}\n\n> *𝙖𝙣𝙞𝙡𝙖 𝙡𝙤𝙘𝙝𝙖𝙣𝙖*`  ,mimetype: "application/zip" , fileName: `🎬 𝙖𝙣𝙞𝙡𝙖 𝙡𝙤𝙘𝙝𝙖𝙣𝙖 🎬\n${datas}.zip` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadzipn",
    react: "✔️",
    alias: ["upzipn"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🅄🄿🄻🄾🄰🄳🅉🄸🄿   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "application/zip" , fileName: `📃 𝙖𝙣𝙞𝙡𝙖 𝙡𝙤𝙘𝙝𝙖𝙣𝙖 📃\n${datas}.zip` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

cmd({
    pattern: "uploadzipfile",
    react: "✔️",
    alias: ["upzipfile"],
    desc: "Movie Searcher",
    category: "movie",
    use: '.activate_18+',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

if ( !m.quoted ) return reply('*ℹ .🅄🄿🄻🄾🄰🄳🅉🄸🄿🄵🄸🄻🄴   🄹🄸🄳 & 🄼🄾🅅🄸🄴   🄽🄰🄼🄴  (2024)  🅃🅅   🅂🄴🅁🄸🄴🅂 3*')
if ( !q ) return 
const data = q.split(" & ")[0] 
const datas = q.split(" & ")[1] 
 await conn.sendMessage(data, { document : { url : m.quoted.msg  } ,caption: `*${datas}*`  ,mimetype: "application/zip" , fileName: `${datas}.zip` } )
		} catch (e) {
reply('❗ Error' + e )
l(e)
}
})

