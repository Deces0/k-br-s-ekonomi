const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/can");
const sdb = new JsonDatabase("./database/bakiye");
exports.run = async (client, message, args) => {
let user = message.author
let can = db.get(`${message.guild.id}_${user.id}_can`) || 100
let yelek = db.get(`${message.guild.id}_${user.id}_yelek_1`)
let para = sdb.get(`${message.guild.id}_${user.id}_bakiye`)
if(para < 1000) {
    return message.reply('Yeterli para bankanda yok!')  
}
var yemek;

if(can < 50) {
    var yemek = 50
}else if(yelek) {
    var yemek = 150 - can
} else {
    var yemek = 100 - can
}

db.math(`${message.guild.id}_${user.id}_can`, '+', yemek)
sdb.math(`${message.guild.id}_${user.id}_bakiye`, '-', 1000)
let soncan = db.get(`${message.guild.id}_${user.id}_can`)
let embed = new Discord.MessageEmbed()
.setTitle('Yemek yediniz!')
.setDescription(`Son can değeriniz: \`${soncan}\` `)
.setColor('RED')
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
}
exports.conf = {
    name: 'ye',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 60
}