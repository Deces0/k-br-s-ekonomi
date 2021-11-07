const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");


exports.run = async (client, message, args) => {
var user = message.member
var kontrol1 = db.get(`${user.id}_${message.guild.id}_kişilik`)
var kontrol2 = db.get(`${user.id}_${message.guild.id}_özel`)
var kontrol3 = db.get(`${user.id}_${message.guild.id}_fiziksel`)
var kontrol4 = db.get(`${user.id}_${message.guild.id}_hikaye_kontrol`)
let ayar = args[0]
if(!ayar) return message.reply('Lütfen bir ayar belirtiniz! Örnek kullanımı: !kayıtol <kişilik/özel/fiziksel/hikaye>')
if(ayar === 'kişilik') {
    let isim = args[1]
    let soyad = args[2]
    let yaş = args[3]
    if(kontrol1) return message.reply('Çoktan bu özellikleri doldurmuşsun. Sildirmek için bir desteğe ulaş!')
    if(!isim || !soyad || !yaş) return message.reply('Lütfen detayları belirtiniz! Örnek kullanım: !kayıtol kişilik Burak Fiobrum 17')
    db.push(`${user.id}_${message.guild.id}_kimlik`,{Isım:isim,Soyad:soyad,Yas:yaş})
    db.set(`${user.id}_${message.guild.id}_kişilik`, true)
    message.reply('Kişilik bilgileri kimliğine kaydedildi!')
}
if(ayar === 'özel') {
    let cinsiyet = args[1]
    let yönelim = args[2]
    let ırk = args[3]
    let inanç = args[4]
    if(!kontrol1) return message.reply('Lütfen önce kişilik özelliklerini doldurunuz!')
    if(kontrol2) return message.reply('Çoktan bu özellikleri doldurmuşsun. Sildirmek için bir desteğe ulaş!')
    if(!cinsiyet || !yönelim || !ırk || !inanç) return message.reply('Lütfen detayları belirtiniz! Örnek kullanım: !kayıtol özel Erkek Heteroseksüel Türk Müslüman')
    db.push(`${user.id}_${message.guild.id}_kimlik`,{Cinsiyet:cinsiyet,Yönelim:yönelim,Irk:ırk,Inanç:inanç})
    db.set(`${user.id}_${message.guild.id}_özel`, true)
    message.reply('Özel bilgiler kimliğine kaydedildi!')
}
if(ayar === 'fiziksel') {
    let boy = args[1]
    let kilo = args[2]
    let sestonu = args[3]
    let tenrengi = args[4]
    let göz = args[5]
    let saç = args[6]
    let kas = args[7]
    if(!kontrol1 && !kontrol2) return message.reply('Lütfen önce kişilik özelliklerini ve özel özellikleri doldurunuz!')
    if(kontrol3) return message.reply('Çoktan bu özellikleri doldurmuşsun. Sildirmek için bir desteğe ulaş!')
    if(!boy || !kilo || !sestonu || !tenrengi || !göz || !saç || !kas) return message.reply('Lütfen detayları belirtiniz! Örnek kullanım: !kayıtol fiziksel 190 100 Erkeksi Beyaz Kahverengi Siyah Fit')
    db.push(`${user.id}_${message.guild.id}_kimlik`,{Boy:boy,Kilo:kilo,SesTonu:sestonu,TenRengi:tenrengi,TenRengi:tenrengi,Göz:göz,Saç:saç,Kas:kas})
    db.set(`${user.id}_${message.guild.id}_fiziksel`, true)
    message.reply('Fiziksel bilgiler kimliğine kaydedildi!')
}
if(ayar === 'hikaye') {
    let hikaye = args.slice(1).join(" ");
    if(!hikaye) return message.reply('Lütfen bir hikaye belirtiniz!')
    if(kontrol4) return message.reply('Çoktan hikayeni doldurmuşsun. Sildirmek için bir desteğe ulaş!')
    db.push(`${user.id}_${message.guild.id}_hikaye`, hikaye)
    db.set(`${user.id}_${message.guild.id}_hikaye_kontrol`, true)
    message.reply('Hikayen kimliğine kaydedildi!')
}
};

exports.conf = {
    name: 'kayıtol',
    aliases: ["kayıt-ol"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};