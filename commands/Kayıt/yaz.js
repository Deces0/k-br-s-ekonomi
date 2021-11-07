const Discord = require('discord.js');


exports.run = function(client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!**`)
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('**Mesaj Yazdırma Sistemi**\n\n!yaz duyuru <mesaj>\n!yaz embed <mesaj>\n!yaz standart <mesaj>').setColor("BLUE"))

if (args[0] === "duyuru") {
      let duyuru = args.slice(1).join(' ')
      if (!duyuru) return message.channel.send(new Discord.MessageEmbed().setDescription('Lütfen duyuru içeriğini girin.').setColor('RED'))
      message.channel.send(new Discord.MessageEmbed().setTitle('Duyuru').setDescription(`${duyuru}`).setColor('#000000'))
      message.channel.send("@everyone")
	  message.delete()

}

if (args[0] === "embed") {
    let embed = args.slice(1).join(' ')
    if (!embed) return message.channel.send(new Discord.MessageEmbed().setDescription('Lütfen mesaj içeriğini girin.').setColor('RED'))
    message.channel.send(new Discord.MessageEmbed().setDescription(`${embed}`).setColor('#000000'))
	message.delete()

}

if (args[0] === "standart") {
    let standart = args.slice(1).join(' ')
    if (!standart) return message.channel.send(new Discord.MessageEmbed().setDescription('Lütfen mesaj içeriğini girin.').setColor('RED'))
    message.channel.send(`${standart}`)
	message.delete()

}


};   
  

exports.conf = {
  name: 'yaz',
  aliases: ["writes"],
  guildOnly: true,
  status: true,
  ownerGuild: false,
  consoleLog: true,
  channelLog: true,
  cooldown: 10
};