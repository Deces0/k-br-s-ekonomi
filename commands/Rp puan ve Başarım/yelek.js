const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/can");
const sdb = new JsonDatabase("./database/bakiye");
exports.run = async (client, message, args) => {
let user = message.author
let yelek = db.get(`${message.guild.id}_${user.id}_yelek`)
let giyili = db.get(`${message.guild.id}_${user.id}_yelek_1`)
let para = sdb.get(`${message.guild.id}_${user.id}_bakiye`)
if(args[0] === 'al') {
    if(yelek) return message.reply('Satın alınmış yeleğiniz var!')
    db.set(`${message.guild.id}_${user.id}_yelek`, true)
    sdb.math(`${message.guild.id}_${user.id}_bakiye`, '-', '10000')
    if(para < 10000) {
        return message.reply('Yeterli para bankanda yok!')  
    }
    let embed = new Discord.MessageEmbed()
.setTitle('Yelek Alındı!')
.setColor('RED')
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
}
if(args[0] === 'giy') {
    if(giyili) return message.reply('Yeleğiniz giyili!')
    db.set(`${message.guild.id}_${user.id}_yelek_1`, true)
    let embed = new Discord.MessageEmbed()
    .setTitle('Yelek Giyildi!')
    .setColor('RED')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
   db.math(`${message.guild.id}_${user.id}_can`, '+', 50)
   db.delete(`${message.guild.id}_${user.id}_yelek`)
}
}
exports.conf = {
    name: 'yelek',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
}