const Discord = require("discord.js");


exports.run = async (client, message, args) => {
if (message.channel.id !== '825913299954303046') return message.channel.send('Sadece <#825913299954303046> kanalında tweet atabilirsiniz!')
let yazar = message.author
let pp = message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 });
let mesaj = args.slice(0).join(" ")
function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
if(!mesaj) {
    message.delete()
    yazar.send('Bir mesaj girmelisin!')
}  
let rt = randomNumber(9, 99)
let lk = randomNumber(9, 9999)
let embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(yazar.username , pp)
.setDescription(mesaj)
.addField('Retweets', rt, true)
.addField('Likes', lk, true)
.setFooter('Twitter', 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png' )
message.channel.send(embed)
message.delete()
};

exports.conf = {
    name: 'twitter',
    aliases: ["tt"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};