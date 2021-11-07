
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");
if(!message.member.roles.cache.has('825913063270121485')) {
        return message.reply("**Para Eklemek İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }
    let user = message.mentions.users.first();
    let para1 = args[1]
    if (isNaN(para1)) return message.channel.send('Bir sayı olmalı!')
    let para = parseInt(para1)

    await db.add(`${message.guild.id}_${user.id}_bakiye`, para)

    const bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`)
    
    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Bakiye eklendi')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`Yeni Bakiye: ${bakiye} Frang`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    let embed1 = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Bakiye eklendi')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`${message.member} adlı yetkili, ${user} adlı kullanıcıya \`${para}\` frang ekledi!`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    client.guilds.cache.get('825911059877330954').client.channels.cache.get('836411733585035314').send(embed1)
};

exports.conf = {
    name: 'para-ekle',
    aliases: ["paraekle"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};