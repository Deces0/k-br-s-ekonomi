const Discord = require('discord.js');
const fsLibrary  = require('fs')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return;
    //let chimped = message.guild.roles.cache.filter(a => a.name !== 'everyone' && !a.managed).sort((a, b) => a.position - b.position).map(c => `${c.name} | ${c.id}`).reverse()
    message.channel.messages.fetch("838199242710581268")
    .then(message => console.log(message.embeds[0].description.split('<@&').join('').split('>').join('')))
    .catch(console.error);
    message.delete()
};
exports.conf = {
    name: 'sa',
    aliases: [""],
    guildOnly: true,
    status: false,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 30
  };