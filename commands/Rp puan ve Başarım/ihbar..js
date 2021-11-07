
const { config } = require('process');
const Discord = require("discord.js")
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/rppuan");
exports.run = async (client, message, args) => {
    let user = message.mentions.members.first() || message.author;
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('İhbar göndermek için mesaj gir.');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTitle('🚨 Yeni bir İhbar Geldi!')
    .setImage('https://i.pinimg.com/originals/4e/7a/2a/4e7a2a1a90115e9b571d28fc32754e9e.gif')
    .setDescription(`**İhbar Gönderen Kişi:** ${message.member.displayName}\n**İhbar İçeriği:** ${mesaj}\n**İhbar Konumu:** ${message.channel.name}`)
    .setFooter('Ortak Operatör', 'https://images-ext-1.discordapp.net/external/HrUE7UOXFZutfPmhkaHSh6acBduBwFI-t8pjykmy0dA/https/images-ext-2.discordapp.net/external/bf_G5bI1Iq2SPo47oeYanllXT5bx0L73nm8br3aAGBo/%253Fcontent-type%253Dimage%25252Fgif/https/images.squarespace-cdn.com/content/599bfc6803596ef973b3fade/1524059721960-OL2PPH595FWN6M2BXETX/tenor.gif')
    client.channels.cache.get('839888037927845968').send(embed);
    client.channels.cache.get('839888037927845968').send("<@&825913097628811285>");
    client.channels.cache.get('839888037927845968').send("<@&825913097138339850>");
    client.channels.cache.get('839888037927845968').send("<@&825913094907625542>");
    message.reply('İhbarın başarıyla ilgili ekiplere iletildi.')
};
  
exports.conf = {
    name: 'ihbar',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};