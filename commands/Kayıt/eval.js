const Discord = require('discord.js')
const client = new  Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const config = require("C:\\Users\\gullu\\Desktop\\Kıbrıs RP\\config.json");

exports.run = (client, message, args) => {
  if (!config.owner_settings.owner.includes(message.author.id)) return message.reply(":no_entry: Bu Komutu Sadece Yetkililer Kullanabilir.");
  try {
 
    var code = args.join(" ");
    var evaled = eval(code);
    let tip = typeof(clean(evaled))
 
    evaled = require("util").inspect(evaled);
   
 
    if(evaled.length>1000){
      let Embed = new Discord.MessageEmbed()
    .addField("Giriş","```js\n" + code + "```")
    .setColor("FFD700")
    .addField("Sonuç", "```js\n" +evaled.slice(0,1000) + "...```")
    .addField('Tür', `\`${tip}\``, true)
    .addField('Uzunluk', `\`${evaled.length}\``, true)
    .addField('Zaman', ` \`0.0${client.ws.ping} ms\` `, true)
 
     message.reply(Embed).then(async function(mesajzz) {
      const filter = (reaction, user) => user.id === message.author.id;
      await mesajzz.react("✅").catch(function() {})
      await mesajzz.react("❌").catch(function() {})
      await mesajzz.react("↩️").catch(function() {})
      var reactions = mesajzz.createReactionCollector(filter);
   
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "✅") {
          mesajzz.delete()
    message.delete()
    }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "❌") {
          mesajzz.edit(new Discord.MessageEmbed()
    .addField("Giriş","```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .setColor("FFD700")
    .addField("Sonuç", "```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .addField('Tür', `\`Gizlendi\``, true)
    .addField('Uzunluk', `\`Gizlendi\``, true)
    .addField('Zaman', ` \`Gizlendi\` `, true))
    mesajzz.reactions.remove(message.author.id)
        }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "↩️") {
          mesajzz.edit(Embed)
          reaction.users.remove(message.author.id)
        }
      });
    });
   
    }else{
 
    let Embed = new Discord.MessageEmbed()
    .addField("Giriş","```js\n" + code + "```")
    .setColor("FFD700")
    .addField("Sonuç", "```js\n" + clean(evaled) + "```")
    .addField('Tür', `\`${tip}\``, true)
    .addField('Uzunluk', `\`${evaled.length}\``, true)
    .addField('Zaman', ` \`0.0${client.ws.ping} ms\` `, true)
 
         message.reply(Embed).then(async function(mesajzz) {
      const filter = (reaction, user) => user.id === message.author.id;
      await mesajzz.react("✅").catch(function() {})
      await mesajzz.react("❌").catch(function() {})
      await mesajzz.react("↩️").catch(function() {})
      var reactions = mesajzz.createReactionCollector(filter);
   
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "✅") {
          mesajzz.delete()
    message.delete()
  }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "❌") {
          mesajzz.edit(new Discord.MessageEmbed()
    .addField("Giriş","```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .setColor("FFD700")
    .addField("Sonuç", "```diff\n- ❌ Bu Eval "+message.member.displayName+" Tarafından Gizlendi.```")
    .addField('Tür', `\`Gizlendi\``, true)
    .addField('Uzunluk', `\`Gizlendi\``, true)
    .addField('Zaman', ` \`Gizlendi\` `, true))
    reaction.users.remove(message.author.id)
  }
      });
      reactions.on("collect", async function(reaction) {
        if (reaction.emoji.name === "↩️") {
          mesajzz.edit(Embed)
          reaction.users.remove(message.author.id)
        }
      });
    });
 
   
    }
   
  }
 
catch (err) {
         message.reply(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
 
 
 
function clean(text) {
if (typeof(text) === "string")
  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
  return text;
}
 }
 exports.conf = {
    name: 'eval',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: true,
    channelLog: false,
    cooldown: 5
  };