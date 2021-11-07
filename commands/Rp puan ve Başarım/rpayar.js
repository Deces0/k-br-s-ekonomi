
const { config } = require('process');
const Discord = require("discord.js")
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/rppuan");
exports.run = async (client, message, args) => {
    let data = db.get("kanallar") ? db.get("kanallar") : null
    if(!data) data = []
    if(!message.member.roles.cache.has("830090608311926785")) return message.channel.send('İzniniz yok!')
    if(data.find(e => e.channelID == message.channel.id)){
      function remove(arr, value) {
        arr.splice(value, 1);
    
      return arr;
    }
    let arr = db.get(`kanallar`) ? db.get(`kanallar`) : null
    if(!arr) arr = []
    
    remove(arr, arr.findIndex(x => x.channelID == message.channel.id))
    db.set("kanallar",arr)
   return message.channel.send("Bu kanala kapatıldı!")
    }else {
db.push("kanallar",{channelID:message.channel.id,channelName:message.channel.name})
return message.channel.send("Bu kanala açıldı!")
    }
};
  
exports.conf = {
    name: 'aktive-et',
    aliases: ["sayaçaç"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};