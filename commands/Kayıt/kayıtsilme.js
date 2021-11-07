const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");


exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has('825913063270121485')) {
        return message.reply("**Kayıt Silmek İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }
var user = message.mentions.users.first()
let ayar = args[1]
if(!ayar) return message.reply('Lütfen bir ayar belirtiniz! Örnek kullanımı: !kayıt-silme <kişi> <hikaye/özellikler>')
if(ayar === 'hikaye') {
    db.delete(`${user.id}_${message.guild.id}_hikaye`)
    db.delete(`${user.id}_${message.guild.id}_hikaye_kontrol`)
    message.reply(`Hikaye ${user} adlı kişinin kimliğinden silindi!`)
}
if(ayar === 'özellik') {
db.delete(`${user.id}_${message.guild.id}_kimlik`)
db.delete(`${user.id}_${message.guild.id}_kişilik`)
db.delete(`${user.id}_${message.guild.id}_özel`)
db.delete(`${user.id}_${message.guild.id}_fiziksel`)
message.reply(`Özellikler ${user} adlı kişinin kimliğinden silindi!`)
}
};

exports.conf = {
    name: 'kayıt-silme',
    aliases: ["kayıt-sil"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};