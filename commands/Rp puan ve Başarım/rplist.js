const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/rppuan");
exports.run = async (client, message, args) => {
  
    let data = db.get("kelime.")
    if(!data) return message.channel.send("Data yok")
    let sayilar = Object.keys(db.get("kelime."))
    
    sayilar.sort(function(a, b){return db.get(`kelime.${a}`)-db.get(`kelime.${b}`)})
    console.log(sayilar)
    sayilar.reverse()
    if(!sayilar) return message.channel.send("Hata verdim")
    let embed = new Discord.MessageEmbed()
    .setTitle(":speech_balloon: KELİME LİSTESİ")
    .setColor("#2F3136")
    .setThumbnail(message.guild.iconURL({dynamic : true}))
    .setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`**#1** | <@!${sayilar[0]}> Kelime: \`${db.get(`kelime.${sayilar[0]}`)}\`\n**#2** | <@!${sayilar[1]}> Kelime: \`${db.get(`kelime.${sayilar[1]}`)}\`\n**#3** | <@!${sayilar[2]}> Kelime: \`${db.get(`kelime.${sayilar[2]}`)}\`\n**#4** | <@!${sayilar[3]}> Kelime: \`${db.get(`kelime.${sayilar[3]}`)}\`
**#5** | <@!${sayilar[4]}> Kelime: \`${db.get(`kelime.${sayilar[4]}`)}\` `)
message.channel.send(embed)

}
exports.conf = {
    name: 'rplist',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 100
};