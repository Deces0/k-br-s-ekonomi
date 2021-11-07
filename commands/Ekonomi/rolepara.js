
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    let money = args[1] 
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
    let rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[0])
    if(!rol) return message.channel.send("Lütfen bir rol etiketle ya da Rol İD gir!")
       if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
    .setDescription(`⛔ Yatırılacak maaş miktarını girmelisin!`)) 
      if(isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
    .setDescription(`⛔ Yatırılacak maaş miktarını girmelisin!`)) 
      if(args[1] < 0) return message.channel.send(new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
    .setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`)
                                                          );    
    message.guild.roles.cache.get(rol.id).members.map(r => db.add(`${message.guild.id}_${r.user.id}_bakiye`))
    message.react(":white_check_mark:");
};

exports.conf = {
    name: 'rolepara',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};