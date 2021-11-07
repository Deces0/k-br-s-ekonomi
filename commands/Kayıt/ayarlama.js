const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("**Yetkin yok!**").then(msg => msg.delete({timeout:20000}))
    }
        if (message.author.bot) return; 
          let channel = client.channels.cache.get("811839508370030643"); 
          const embed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTitle("KIMLIK MENUSU")
          .setDescription(`CINSIYET SEÇİMİ \n ---------------------- \n Erkek: "🕺" \n Kadın: "💃" \n ---------------------- \n DIN SECIMI \n ---------------------- \n Müslüman: "☪️" \n Hristiyan: "✝️"\n Ateist/Deist: "🕎" \n Yahudi: "✡" \n ---------------------- \n SEHIR SECIMI \n ---------------------- \n Lefkoşa: "📌" \n Girne: "🏢" \n Güzelyurt: "🔴" \n İskele: "👣" \n---------------------- \n CINSELLIK SECIMI \n ---------------------- \n Heteroseksüel: "👫"\n Homoseksüel: "👬"\n Biseksüel: "🏳️‍🌈"\n Aseksüel: "❎"`) //emoji almak için herhangi bir kanala \:emojiadı: şeklinde yazıp alabilirsiniz
          channel.send(embed).then(async msg => {
           let arr = ["🕺","💃","☪️","✝️","🕎","✡","📌","🏢","🔴","👣","❎","🏳️‍🌈","👬","👫"]
           for (i = 0; i < arr.length; i++) {
            await msg.react(arr[i]);
        }

          });
};

exports.conf = {
    name: 'kayıtayarlama',
    aliases: [""],
    guildOnly: true,
    status: false,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};