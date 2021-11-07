const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/telefon");
const gt = new JsonDatabase("./database/global_telefon");

exports.run = async (client, message, args) => {
    let kanal = client.channels.cache.get(db.get(`${message.guild.id}_${message.author.id}_arama`)) 
    if(!kanal) return message.channel.send('Lütfen önce birini arayınız!')
    if(message.channel.id !== kanal.id) return message.channel.send('Lütfen arama kanalında kullanınız!')
    const onayembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor("Çağrı Kapatma Komutu")
    .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
    .setDescription("**UYARI!** \n\nEğer kapatma işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\n")
    message.channel.send(onayembed).then(msg => {
  msg.react('👍').then(() => msg.react('👎'));
  
  const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
          const reaction = collected.first();
  
          if (reaction.emoji.name === '👍') {
            kanal.delete();
            db.delete(`${message.guild.id}_${message.author.id}_arama`)
          } else {
              message.reply('Kapatma işlemi iptal edildi!');
        msg.delete({timeout:3000})
          }
      })
      .catch(collected => {
          message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
      });
    
  })
};

exports.conf = {
    name: 'çağrı-kapat',
    aliases: ["çk"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};