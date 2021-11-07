const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const hdb = new JsonDatabase("./database/hayvan");
const adb = new JsonDatabase("./database/araba");
const sdb = new JsonDatabase("./database/silah");
const mdb = new JsonDatabase("./database/mülk");
const ödb = new JsonDatabase("./database/özeleşya");
exports.run = async (client, message, args) => {
    let user = message.author || message.mentions.members.first()
const eşya = hdb.fetch(`${message.guild.id}_${user.id}_hayvan`) || 'Hayvan yok!'
const araba = adb.fetch(`${message.guild.id}_${user.id}_araba`) || 'Araba yok!'
const silah = sdb.fetch(`${message.guild.id}_${user.id}_silah`) || 'Silah yok!'
const mülk = mdb.fetch(`${message.guild.id}_${user.id}_mülk`) || 'Mülk yok!'
const özeleşya = ödb.fetch(`${message.guild.id}_${user.id}_özeleşya`) || 'Özel eşya yok!'

let embed = new Discord.MessageEmbed()
.setColor('DARKBLUE')
.setTitle('Varlıklarınız')
.addField('Hayvan', eşya)
.addField('Arabalar', araba)
.addField('Silahlar', silah)
.addField('Mülkler', mülk)
.addField('Özel Eşya', özeleşya)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
    name: 'kontrol',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};