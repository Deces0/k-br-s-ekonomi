
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");

    let user = message.author
    const cüzdan = db.fetch(`${message.guild.id}_${user.id}_cüzdan`)
    const bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`)

    let para1 = args[0]
    let para = parseInt(para1)
    let sonpara1 = bakiye + para
    let soncüzdan1 = cüzdan - para
    let sonpara = parseInt(sonpara1)
    let soncüzdan = parseInt(soncüzdan1)
    if(para > cüzdan) return message.reply('Yeterli paranız yok!')
    if(!para1) return message.reply('Bir miktar belirtmelisiniz!')

    await db.set(`${message.guild.id}_${user.id}_bakiye`, sonpara)
    await db.add(`${message.guild.id}_${user.id}_cüzdan`, soncüzdan)

    const cüzdan1 = db.fetch(`${message.guild.id}_${user.id}_cüzdan`)
    const bakiye1 = db.fetch(`${message.guild.id}_${user.id}_bakiye`)

    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Para bankaya çekildi!')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .addField('Banka Bakiyen', bakiye1)
    .addField('Cüzdan Bakiyen', cüzdan1)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    let embed1 = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Para bankaya çekildi!')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`${user} adlı kişi \`${para}\` miktarında parasını bankasına aktardı!`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    client.guilds.cache.get('825911059877330954').client.channels.cache.get('836430790098288700').send(embed1)
};

exports.conf = {
    name: 'para-at',
    aliases: ["paraat"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};