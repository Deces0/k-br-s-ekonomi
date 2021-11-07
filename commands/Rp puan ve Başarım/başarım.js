const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/başarım");
exports.run = async (client, message, args) => {
let ayar = args[0]
let user = message.mentions.users.first() 
if(!ayar) return message.reply('Bir ayar belirtmediniz')
if(ayar === 'ver') {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("**Yetkin yok!**").then(msg => msg.delete({timeout:20000}))
    }
    let başarım = args[1]
    if(!başarım) return message.reply('Bir başarım belirtmediniz. Başarım listesi için **!başarım liste**')
    
    let rnd= '14'
    let title = 'Basarim Kazanildi!'
    let contents;
    if(başarım === 'polis') {
        contents = 'Departmana Hosgeldin'
    }
    if(başarım === 'mit') {
        contents = 'Beyaz Yalanlar'
    }
    if(başarım === 'yeraltıkralı') {
        contents = 'Yeralti Krali'
    }
    if(başarım === 'sağkol') {
        contents = 'Sag Kol'
    }
    if(başarım === 'ordu') {
        contents = 'Orduya Giris'
    }
    if(başarım === 'sanat') {
        contents = 'Sanatini Ortaya Koyma Zamani'
    }
    if(başarım === 'ilkmesaj') {
        contents = 'Ilk Mesaj'
    }
    if(başarım === 'uzman') {
        contents = 'Uzman'
    }
    if(başarım === 'talihsiz') {
        contents = 'Talihsiz Balikci'
    }
    if(başarım === 'korku') {
        contents = 'Sucluların Korkusu'
    }
    if(başarım === 'ehli') {
        contents = 'Isinin Ehli'
    }
    if(başarım === 'çiftçi') {
        contents = 'Ciftci'
    }
    if(başarım === 'event') {
        contents = 'Event Fatihi'
    }
    const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
const embed = new Discord.MessageEmbed()
.setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
.setDescription(`
${message.author} adlı yetkili ${user} adlı userye belirtilen başarımı verdi:\n
**${contents}**
`)
.setColor('BLUE')
.setImage(url)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
client.users.cache.get(user.id).send(embed)
db.set(`${message.guild.id}_${user.id}_başarım_${başarım}`, true)
}
if(ayar === 'al') {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("**Yetkin yok!**").then(msg => msg.delete({timeout:20000}))
    }
    let başarım = args[1]
    if(!başarım) return message.reply('Bir başarım belirtmediniz. Başarım listesi için **!başarım liste**')
    
    let rnd= '14'
    let title = 'Basarim Kaybedildi!'
    let contents;
    if(başarım === 'polis') {
        contents = 'Departmana Hosgeldin'
    }
    if(başarım === 'mit') {
        contents = 'Beyaz Yalanlar'
    }
    if(başarım === 'yeraltıkralı') {
        contents = 'Yeralti Krali'
    }
    if(başarım === 'sağkol') {
        contents = 'Sag Kol'
    }
    if(başarım === 'ordu') {
        contents = 'Orduya Giris'
    }
    if(başarım === 'sanat') {
        contents = 'Sanatini Ortaya Koyma Zamani'
    }
    if(başarım === 'ilkmesaj') {
        contents = 'Ilk Mesaj'
    }
    if(başarım === 'uzman') {
        contents = 'Uzman'
    }
    if(başarım === 'talihsiz') {
        contents = 'Talihsiz Balikci'
    }
    if(başarım === 'korku') {
        contents = 'Sucluların Korkusu'
    }
    if(başarım === 'ehli') {
        contents = 'Isinin Ehli'
    }
    if(başarım === 'çiftçi') {
        contents = 'Ciftci'
    }
    if(başarım === 'event') {
        contents = 'Event Fatihi'
    }
    const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
const embed = new Discord.MessageEmbed()
.setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
.setDescription(`
${message.author} adlı yetkili ${user} adlı userden belirtilen başarımı aldı:\n
**${contents}**
`)
.setColor('BLUE')
.setImage(url)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
client.users.cache.get(user.id).send(embed)
db.delete(`${message.guild.id}_${user.id}_başarım_${başarım}`)
}
if(ayar === 'kontrol') {
let başarım1 = db.has(`${message.guild.id}_${user.id}_başarım_polis`)
let başarım2 = db.has(`${message.guild.id}_${user.id}_başarım_mit`)
let başarım3 = db.has(`${message.guild.id}_${user.id}_başarım_yeraltkralı`)
let başarım4 = db.has(`${message.guild.id}_${user.id}_başarım_sağkol`)
let başarım5 = db.has(`${message.guild.id}_${user.id}_başarım_ordu`)
let başarım6 = db.has(`${message.guild.id}_${user.id}_başarım_sanat`)
let başarım7 = db.has(`${message.guild.id}_${user.id}_başarım_ilkmesaj`)
let başarım8 = db.has(`${message.guild.id}_${user.id}_başarım_uzman`)
let başarım9 = db.has(`${message.guild.id}_${user.id}_başarım_talihsiz`)
let başarım10 = db.has(`${message.guild.id}_${user.id}_başarım_korku`)
let başarım11 = db.has(`${message.guild.id}_${user.id}_başarım_ehli`)
let başarım12 = db.has(`${message.guild.id}_${user.id}_başarım_çiftçi`)
let başarım13 = db.has(`${message.guild.id}_${user.id}_başarım_event`)
let arr = []
if(başarım1 === true) {
    arr.push('Departmana Hoşgeldin')
}
if(başarım2 === true) {
    arr.push('Beyaz Yalanlar')
}
if(başarım3 === true) {
    arr.push('Yeraltı Kralı')
}
if(başarım4 === true) {
    arr.push('Sağ Kol')
}
if(başarım5 === true) {
    arr.push('Orduya Giriş')
}
if(başarım6 === true) {
    arr.push('Sanatını Ortaya Koyma Zamanı!')
}
if(başarım7 === true) {
    arr.push('İlk Mesaj')
}
if(başarım8 === true) {
    arr.push('Uzman')
}
if(başarım9 === true) {
    arr.push('Talihsiz Balıkçı')
}
if(başarım10 === true) {
    arr.push('Suçluların Korkusu')
}
if(başarım11 === true) {
    arr.push('İşinin Ehli')
}
if(başarım12 === true) {
    arr.push('Çiftçi')
}
if(başarım13 === true) {
    arr.push('Event Fatihi')
}
    if( arr === 'null' || arr === '') {
        let filter = 'Kayıtlı Numara Yok'
        const embed = new Discord.MessageEmbed()
        .setTitle(`${user.username} adlı kişinin başarım listesi`)
        .setColor('BLUE')
        .setAuthor('Kıbrıs Cumhuriyeti')
        .setDescription(`
         **${filter}**
        `)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
        message.channel.send(embed)
    } else {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${user.username} adlı kişinin başarım listesi`)
        .setColor('BLUE')
        .setAuthor('Kıbrıs Cumhuriyeti')
        .setDescription(`
         **${arr.join('\n ')}**
        `)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
        message.channel.send(embed)
    }
}
if(ayar === 'liste') {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Sunucu Başarım Listesi`)
        .setColor('BLUE')
        .setAuthor('Kıbrıs Cumhuriyeti')
        .setDescription(`
        ➡ Başarım İsmi ➡ Başarım Kodu\n
        -------------------------------------------\n
        ➡ İlk Mesaj ➡ ilkmesaj\n
        ➡ Uzman ➡ uzman\n
        ➡ Talihsiz Balıkçı ➡ talihsiz\n
        ➡ Departmana Hoşgeldin ➡ polis\n
        ➡ Suçluların Korkusu ➡ korku\n
        ➡ İşinin Ehli ➡ ehli\n
        ➡ Çiftçi ➡ çiftçi\n
        ➡ Event Fatihi ➡ event\n
        ➡ Beyaz Yalanlar ➡ mit\n
        ➡ Yeraltı Kralı ➡ yeraltıkralı\n
        ➡ Sağ Kol ➡ sağkol\n
        ➡ Sanatını Ortaya Koyma Zamanı! ➡ sanat\n
        ➡ Orduya Giriş ➡ ordu\n
        -------------------------------------------
        `)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
        message.channel.send(embed)
}
}
exports.conf = {
    name: 'başarım',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};