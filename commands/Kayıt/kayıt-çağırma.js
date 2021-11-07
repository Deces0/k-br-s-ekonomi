const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Kayıt Ekibi Çağrıldı')
    .setImage(message.guild.iconURL({dynamic : true}))
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
message.channel.send('<@&825913063270121485>')
message.channel.send(embed)

};

exports.conf = {
    name: 'kayıt',
    aliases: ["kayıt"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 30
};