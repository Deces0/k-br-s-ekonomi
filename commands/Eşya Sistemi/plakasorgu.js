const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const pdb = new JsonDatabase("./database/plaka");
exports.run = async (client, message, args) => {
let plakaid = args.slice(0).join(" ")
const plaka = pdb.get(`${message.guild.id}_${plakaid}`) 
if(!plakaid) return message.reply('Lütfen bir plaka belirtin! Örnek kullanım: !sorgu YB 42 QE')
if(!plaka) return message.reply('Lütfen geçerli plaka belirtin! Örnek kullanım: !sorgu YB 42 QE')
let sa = plaka[0]
let sahip = sa.Sahip
let araba = sa.ArabaAd
let embed = new Discord.MessageEmbed()
.setColor('DARKBLUE')
.setTitle('Belorya Plaka Sorgu Ekranı')
.setDescription(`${message.member} sizin için veritabanı üstünden **${plakaid}** numaralı plakayı araştırdım. Sonuçlar: \n\n------------------------------------------------------\n\n Araba Adı: **${araba}** \n Sahibin Adı: <@${sahip}>`)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)

};

exports.conf = {
    name: 'sorgu',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};