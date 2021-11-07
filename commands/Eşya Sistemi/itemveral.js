const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const hdb = new JsonDatabase("./database/hayvan");
const adb = new JsonDatabase("./database/araba");
const sdb = new JsonDatabase("./database/silah");
const mdb = new JsonDatabase("./database/mülk");
const ödb = new JsonDatabase("./database/özeleşya");
exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has('825913063270121485')) {
        return message.reply("**Para Eklemek İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }
let user =  message.mentions.members.first()
if(!args[1]) return message.reply('Lütfen bir ayar girin! !item <ver/al> <@kişi> <araba/hayvan/silah/mülk/özeleşya> <item ismi>')
if(!args[2]) return message.reply('Lütfen bir ayar girin! !item <ver/al> <@kişi> <araba/hayvan/silah/mülk/özeleşya> <item ismi>')
if(!args[3]) return message.reply('Lütfen bir ayar girin! !item <ver/al> <@kişi> <araba/hayvan/silah/mülk/özeleşya> <item ismi>')
if(args[0] === 'ver') {
    if(args[2] === 'hayvan' ) {
        let ayar = args[3]
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, ayar) 
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Verildi!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiye verildi!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'araba' ) {
        let ayar = args[3]
        adb.push(`${message.guild.id}_${user.id}_araba`, ayar) 
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Verildi!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiye verildi!`)
        .setFooter(message.member.name , message.member.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'silah' ) {
        let ayar = args[3]
        sdb.push(`${message.guild.id}_${user.id}_silah`, ayar) 
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Verildi!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiye verildi!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'mülk' ) {
        let ayar = args[3]
        mdb.push(`${message.guild.id}_${user.id}_mülk`, ayar)
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Verildi!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiye verildi!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'telefon' ) {
        let ayar = args[3]
        ödb.push(`${message.guild.id}_${user.id}_özeleşya`, ayar)
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Verildi!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiye verildi!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
}
if(args[0] === 'al') {
    if(args[2] === 'hayvan' ) {
        let ayar = args[3]
        let arr =  hdb.get(`${message.guild.id}_${user.id}_hayvan`)
        let arr2 = arr.slice(ayar, 1)
        hdb.set(`${message.guild.id}_${user.id}_hayvan`, arr2) 
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Alındı!!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiden alındı!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'araba' ) {
        let ayar = args[3]
        let arr =  adb.get(`${message.guild.id}_${user.id}_araba`)
        let arr2 = arr.slice(ayar, 1)
        adb.set(`${message.guild.id}_${user.id}_araba`, arr2) 
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Alındı!!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiden alındı!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'silah' ) {
        let ayar = args[3]
        let arr =  sdb.get(`${message.guild.id}_${user.id}_silah`)
        let arr2 = arr.slice(ayar, 1)
        sdb.set(`${message.guild.id}_${user.id}_silah`, arr2) 
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Alındı!!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiden alındı!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'mülk' ) {
        let ayar = args[3]
        let arr =  mdb.get(`${message.guild.id}_${user.id}_mülk`)
        let arr2 = arr.slice(ayar, 1)
        mdb.set(`${message.guild.id}_${user.id}_mülk`, arr2)
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Alındı!!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiden alındı!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
    if(args[2] === 'telefon' ) {
        let ayar = args[3]
        let arr =  ödb.get(`${message.guild.id}_${user.id}_mülk`)
        let arr2 = arr.slice(ayar, 1)
        ödb.set(`${message.guild.id}_${user.id}_özeleşya`, arr2)
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setColor('DARKBLUE')
        .setTitle('Eşya Alındı!!')
        .setDescription(`${args[3]} adlı eşya ${user} adlı kişiden alındı!`)
        .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
        .setTimestamp()
        message.channel.send(embed)
    }
}

};

exports.conf = {
    name: 'item',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};