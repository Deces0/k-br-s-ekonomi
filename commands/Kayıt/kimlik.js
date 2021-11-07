const Discord = require("discord.js");
const { realpathSync } = require("fs");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");


exports.run = async (client, message, args) => {
var user = message.mentions.users.first() || message.member

let kimlik = db.get(`${user.id}_${message.guild.id}_kimlik`)
if(!kimlik) return message.channel.send(`${user}, Kimlik bilgileriniz tam değil! Lütfen tamamladıktan sonra kullanın! Tamamlamak için: !kayıtol`)
let kişilik = kimlik[0] 
let fiziksel = kimlik[2] 
let özel = kimlik[1] 

let isim = kişilik.Isım 
let soyad = kişilik.Soyad 
let yaş = kişilik.Yas 

let boy = fiziksel.Boy 
let Kilo = fiziksel.Kilo 
let ses = fiziksel.SesTonu 
let göz = fiziksel.Göz 
let saç = fiziksel.Saç 
let Kas = fiziksel.Kas 

let cinsiyet = özel.Cinsiyet 
let yönelim = özel.Yönelim 
let ırk = özel.Irk 
let inanç = özel.Inanç 


let embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('Belorya Roleplay Kimlik')
.setDescription(`${user} adlı kişinin kimlik bilgileri! Hikayeniz için lütfen !hikaye yazın!`)
.addFields(
    { name: 'Kişilik Bilgileri', value: `↪️ | **İsim:** ${isim}\n↪️ | **Soyad:** ${soyad}\n🎂 | **Yaş:** ${yaş}\n`, inline: true },
    { name: 'Özel Bilgileri', value: ` ♀️ / ♂️ | **Cinsiyet:** ${cinsiyet}\n☯️ | **Yönelim:** ${yönelim}\n🔯 | **Irk:** ${ırk}\n✝️ | **İnanç:** ${inanç}\n`, inline: true },
    { name: 'Fiziksel Bilgileri', value: `📏 | **Boy:** ${boy}\n  ⚖️ | **Kilo:** ${Kilo}\n🎤 | **Ses:** ${ses}\n👀 | **Göz:** ${göz}\n👱 | **Saç:** ${saç}\n 💪🏻 | **Kas:** ${Kas}\n`, inline: true },
)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
    name: 'kimlik',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};