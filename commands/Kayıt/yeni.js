const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/moderasyon");
const qdb = new JsonDatabase("./database/bakiye");


exports.run = async (client, message, args) => {
    let kişi = message.author
if(db.has(`${message.guild.id}_${kişi.id}_yenipara`) === true) return message.reply('Paranı çoktan almışsın!')
message.reply('Aramıza hoşgeldiniz! Paranız eklendi!')
qdb.add(`${message.guild.id}_${kişi.id}_bakiye`, 3000)
db.set(`${message.guild.id}_${kişi.id}_yenipara`, true)

};

exports.conf = {
    name: 'yeni',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};