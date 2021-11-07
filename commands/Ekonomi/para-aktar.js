const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");

    let user = message.author
    let user1 = message.mentions.members.first()
    if(user.id === user1.id) return message.reply('Kendine birşey aktaramazsın!')
    if(!user1) return message.reply('Birini belirtmek zorundasın!')
    const cüzdan = db.fetch(`${message.guild.id}_${user.id}_cüzdan`)
    const bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`)

    let para1 = args[1]
    let para = parseInt(para1)
    let sonpara1 = bakiye - para
    let sonpara = parseInt(sonpara1)
    if(para < bakiye) return message.reply('Yeterli paranız yok!')
    if(!para1) return message.reply('Bir miktar belirtmelisiniz!')

    await db.set(`${message.guild.id}_${user.id}_bakiye`, sonpara)
    await db.add(`${message.guild.id}_${user1.id}_bakiye`, para)

    const cüzdan1 = db.fetch(`${message.guild.id}_${user.id}_cüzdan`)
    const bakiye1 = db.fetch(`${message.guild.id}_${user.id}_bakiye`)

    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Para kişiye aktarıldı!')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .addField('Banka Bakiyen', bakiye1)
    .addField('Cüzdan Bakiyen', cüzdan1)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    let embed1 = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Para kişiye aktarıldı!')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`${user} adlı kişi ${user1} adlı kişiye \`${para}\` miktarında para gönderdi!`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    client.guilds.cache.get('825911059877330954').client.channels.cache.get('836426999772872765').send(embed1)
};

exports.conf = {
    name: 'para-aktar',
    aliases: ["paraaktar"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};