const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");


exports.run = async (client, message, args) => {
var user = message.mentions.users.first() || message.member
let onay =  db.get(`${user.id}_${message.guild.id}_onay`)
    var hikaye;
    if(onay === true && db.get(`${user.id}_${message.guild.id}_hikaye`) !== null) {
        var hikaye = `Sayın ${user} hikayeniz aşşağıda belirtlidiği gibirdir: \n\n ${db.get(`${user.id}_${message.guild.id}_hikaye`)}`
    } else if(db.get(`${user.id}_${message.guild.id}_hikaye`) === null) {
        var hikaye = `Sayın ${user} ne yazık ki hikayeniz yok!`
    }
    else {
        var hikaye = `Sayın ${user} hikayeniz daha onaylanmamış durumdadır! Onaylatmak için bir destek ile iletişine geçebilirsiniz!`
    }
    let embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Belorya Roleplay')
    .setDescription(hikaye)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
    name: 'hikaye',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};