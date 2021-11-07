
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");
   
    if(!message.member.roles.cache.has('825913063270121485')) {
        return message.reply("**Para Silmek İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }

    let user = message.mentions.users.first();
    const bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`)
    let para1 = args[1]
    let para = parseInt(para1)
    let sonpara = bakiye - para

    await db.set(`${message.guild.id}_${user.id}_bakiye`, sonpara)

    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Bakiye silindi')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`Yeni Bakiye: ${sonpara} Frang`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    let embed1 = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Bakiye silindi')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`${message.member} adlı yetkili, ${user} adlı kullanıcıdan \`${para}\` frang sildi!`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    client.guilds.cache.get('825911059877330954').client.channels.cache.get('836411733585035314').send(embed1)
};

exports.conf = {
    name: 'para-sil',
    aliases: ["parasil"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};