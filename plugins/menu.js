const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list .",
    react: "🗂️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu ={
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
movie: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}
let mademenu = `👤*Helo ${pushname}*`

> *DOWNLOAD COMMANDS*
${menu.download}

> *MAIN COMMANDS*
${menu.main}

> *GROUP COMMANDS* 
${menu.group}

> *OWNER COMMANDS*
${menu.owner}

> *CONVERT COMMAND*
${menu.convert}

> *SEARCH COMMAND*
${menu.search}

> *MOVIE COMMAND*
${menu.movie}

🧑🏽‍💻POWERD BY ANILA LOCHANA 🧑🏽‍💻
`

await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/3f7249eb429c8211cbba3.jpg"},caption:madeMenu},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}`)

}



})
