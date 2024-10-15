const config=require('../config');
const {cmd,commands}=require('../command');
const os=require("os");const speedTest=require('speedtest-net');
const {runtime}=require('../lib/functions');function convertToReadableSize(speed){return speed>1024?(speed/1024).toFixed(2)+' GBs':speed+' MBs'};

cmd({
  pattern:"ping",
  desc:"Check bot's response time and network speed.",
  category:"main",
  react:"✈️",filename:__filename},
  
 async(conn,mek,m,{from,quoted,body,isCmd,command,args,q,isGroup,sender,senderNumber,botNumber2,botNumber,pushname,isMe,isOwner,groupMetadata,groupName,participants,groupAdmins,isBotAdmins,isAdmins,reply})=>{
 
 try{const startTime=Date.now();await conn.sendMessage(from,{text:'*WA MD... 📶*'});
      

}catch(e){
console.log(e)
reply(`${e}`)
}
})
