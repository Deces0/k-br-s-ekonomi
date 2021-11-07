const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");


exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has('825913063270121485')) {
       return message.reply("**Hikaye Onaylamak/Reddetmek İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }
var user = message.mentions.users.first()
var kontrol = db.get(`${user.id}_${message.guild.id}_onay`)
var hikaye = db.get(`${user.id}_${message.guild.id}_hikaye`)
let ayar = args[1]
if(!ayar) return message.reply('Lütfen bir ayar belirtiniz! Örnek kullanımı: !hikaye-onay <red/kabul>')
if(ayar === 'onay') {
    if(kontrol) return message.reply('Daha önce bu kişinin kimliği onaylanmış!')
    db.set(`${user.id}_${message.guild.id}_onay`, true)
    db.add(`${message.member.id}_${message.guild.id}_kayıtsayı`, 1)
    let onaysayısı = await db.get(`${message.member.id}_${message.guild.id}_kayıtsayı`)
    message.reply(`${user} adlı kişinin hikayesi onaylandı! Artık kendisi !hikaye komutu ile kendinin hikayesine bakabilir!`)
    let embed1 = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Hikaye onaylandı!')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`${message.member} adlı yetkili, ${user} adlı kullanıcının hikayesini onayladı! Yetkilinin toplam onaylama sayısı: \`${onaysayısı}\` `)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    client.guilds.cache.get('825911059877330954').client.channels.cache.get('835275614549835826').send(embed1)
    let embed2 = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Hikaye onaylandı!')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`${message.member} adlı yetkili, ${user} adlı kullanıcının hikayesini onayladı! Hikaye: \n\n ${hikaye}`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    client.guilds.cache.get('825911059877330954').client.channels.cache.get('842820884422066216').send(embed2)

}
if(ayar === 'red') {
    let onaysayısı = await db.get(`${message.member.id}_kayıtsayı`)
    message.reply(`${user} adlı kişinin hikayesi onaylandı! Artık kendisi !hikaye komutu ile kendinin hikayesine bakabilir!`)
    let embed1 = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Hikaye reddedildi!')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`${message.member} adlı yetkili, ${user} adlı kullanıcının hikayesini reddetti! Yetkilinin toplam onaylama sayısı: \`${onaysayısı}\` `)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    client.guilds.cache.get('825911059877330954').client.channels.cache.get('835275614549835826').send(embed1)
}
};

exports.conf = {
    name: 'hikaye-onay',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};