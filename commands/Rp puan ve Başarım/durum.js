const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/can");
const sdb = new JsonDatabase("./database/silah");
exports.run = async (client, message, args) => {
let user = message.author
let can = db.get(`${message.guild.id}_${user.id}_can`) || 100
let embed = new Discord.MessageEmbed()
.setTitle('Yemek yediniz!')
.setDescription(`Son can değeriniz: \`${can}\` `)
.setColor('RED')
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
}
exports.conf = {
    name: 'durum',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 60
}