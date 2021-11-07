const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/can");
const sdb = new JsonDatabase("./database/silah");
exports.run = async (client, message, args) => {
let user = message.author
let kullanıcı = message.mentions.members.first()
let silah = sdb.get(`${message.guild.id}_${user.id}_silah`)
let mermi = sdb.get(`${message.guild.id}_${user.id}_mermi`)
let arr = ['bacak', 'kafa', 'gövde', 'ayak', 'omuz', 'ıska']
if(!kullanıcı) return message.reply('Lütfen birini etiketleyin! Düzgün kullanımı !vur <kişi>')
if(!silah) return message.reply('Silahınız yok!')
if(mermi === '0') return message.reply('Merminiz yok!')
let can = db.get(`${message.guild.id}_${kullanıcı.id}_can`) || 100
var vuruş = arr[Math.floor(Math.random() * arr.length)];
if(vuruş === 'ıska') return message.reply('Iskaladın!')
var hit;
if(vuruş === 'bacak') {
    var hit = 45
}
if(vuruş === 'kafa') {
    var hit = 100
}
if(vuruş === 'gövde') {
    var hit = 75
}
if(vuruş === 'ayak') {
    var hit = 35
}
if(vuruş === 'omuz') {
    var hit = 65
}
var sonhit;

if(hit < can) {
    var sonhit = hit
}

if(hit > can) {
    var sonhit = can
}
db.math(`${message.guild.id}_${kullanıcı.id}_can`, '-', sonhit)
let soncan = await db.get(`${message.guild.id}_${kullanıcı.id}_can`)

var son2;
if(soncan === '0' || soncan < 0) {
    db.set(`${message.guild.id}_${kullanıcı.id}_can`, '100')
    var son2 = '0'
} else {
    var son2 = soncan
}

sdb.math(`${message.guild.id}_${user.id}_mermi`, '-', 1)
let mermi2 = sdb.get(`${message.guild.id}_${user.id}_mermi`)
let embed = new Discord.MessageEmbed()
.setTitle('Ow vuruldun')
.setDescription(`${user} adlı kişi ${kullanıcı} adlı kişiyi vurdu! \n\n Son can değeriniz: \`${son2}\` `)
.setColor('RED')
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
user.send(`Kalan mermi miktarınız: \`${mermi2}\``)
}
exports.conf = {
    name: 'vur',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 60
}