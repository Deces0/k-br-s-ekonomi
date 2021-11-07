
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");
    let user =  message.mentions.members.first() || message.member 
    let bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`) || 0
    let cüzdan = db.fetch(`${message.guild.id}_${user.id}_cüzdan`) || 0
    
    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Aktif Bakiyen')
    .addField('Banka Bakiyen', `${bakiye} Frang` )
    .addField('Cüzdan Bakiyen', `${cüzdan} Frang` )
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
message.channel.send(embed)
};

exports.conf = {
    name: 'bakiye',
    aliases: ["bakiye"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};
