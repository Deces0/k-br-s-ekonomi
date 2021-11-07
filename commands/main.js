const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]}); 
const fs = require('fs');
const chalk = require('chalk')
var moment = require('moment');
const config = require("./config.json");

const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/rppuan");
const mod = new JsonDatabase("./database/moderasyon");
const bş = new JsonDatabase("./database/başarım");

require('./handler/commandLoader.js')(client);
require('./handler/eventLoader.js')(client);


client.login(config.bot.token).then(
    function() {
        console.log(chalk.green.bold("[Token] Token is working."));
    },
    function(err) {
        console.log(chalk.red.bold("[Token ERROR] Token error: ") + err);
        setInterval(function() {
            process.exit(0);
        }, 20000);
    }
);
///DM LOG
client.on("message", msg => {
  var dm = client.channels.cache.get("831238528947978240")
  if(msg.channel.type === "dm") {
  if(msg.author.id === client.user.id) return;
  const botdm = new Discord.MessageEmbed()
  .setTitle(`🔔 Yeni Bir Mesajım Var`)
  .setTimestamp()
  .setColor("RED")
  .setThumbnail(`${msg.author.avatarURL()}`)
  .addField("Gönderen", msg.author.tag)
  .addField("Gönderen ID", msg.author.id)
  .addField("Gönderilen Mesaj", msg.content)
  dm.send(botdm)
  }
  if(msg.channel.bot) return;
  });

client.on("ready", () => {
  const channel = client.channels.cache.get("826391396579541022");
  if (!channel) return console.log(chalk.red.bold("[ConnectToVoice] The channel does not exist!"));
  channel.join().then(connection => {
    // Yay, it worked!
    console.log(chalk.green.bold("[ConnectToVoice] Successfully connected."));
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.log(chalk.green.bold(e));
  });
});
client.on('guildMemberAdd', async (member) => {
  /////////////////////////
     //Kanal Tanımı
     ////////////////////////////////////////
    let viruskanal = client.guilds.cache.get('825911059877330954').channels.cache.get("835515320033607681")
  ////////////////////////////////////////
  //Güvenlik TanımlarıS
  ////////////////////////////////////////
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id)
  const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değil!'
  if (virushesapkurulus > 1296000000) viruj = ' Güvenilir!'
  
  /////////////////////// /////////////////
  //Embed
  ////////////////////////////////////////
    const hgembed = new Discord.MessageEmbed()
    .setDescription(`
    
     ֎ Aramıza Hoşgeldin **${virususer.username}** !
  
     ֎ Seninle Birlikte **${member.guild.memberCount}** Kişiyiz
  
     ֎ <@&802488999230832650> Rolundekiler Senle En Kısa Zamanda İlgilenicek
  
      ֎ İsmini Ve Yaşını Yazıp Kayıt Olabilirsin.
      ֎ Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
  
      ֎ Hesabın Güvenlik Durumu: **${viruj}**
  
      ֎ Ayrıca Tagımızı Alarak Bize Destek Olabilirsin "֎"
    
    `)
    .setColor("#2f3136")
    //.setImage("https://cdn.discordapp.com/attachments/806133001737469952/835503279307620403/609601f80d4c9e3c9a740ef903da87e7.gif")
    .setTitle("Aramıza Yeni Birisi Katıldı !")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setFooter("Belorya Roleplay Kayıt Sistemi")
    ////////////////////////////////////////
    //Kanala Gönderme
    ////////////////////////////////////////
    viruskanal.send(`<@&802488999230832650> <@${member.id}>`, hgembed) ;
  })
///Rol Seçim Sistemi
/*
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch(); 
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; 
  if (!reaction.message.guild) return; 
  if (reaction.message.guild.id !== "811833989827788851") return; //Sunucu idnizi sola girin
  
  if (reaction.message.channel.id === "811839508370030643") { //Kanal idnizi sola girin
    if (reaction.emoji.name === "🕺") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("811904503556079686") // İstediğiniz Rol idsini girin
      return user.send("Erkek rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim"));
    }
    if (reaction.emoji.name === "💃") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("811904803461660672"); // İstediğiniz Rol idsini giriniz
      return user.send(" Kadın rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "☪️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813399542266855474") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("İslam rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "✝️") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813399912502001665") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Hristiyan rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "✡") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813400134862766090") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Yahudi rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🕎") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813400356049780757") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Ateist/Deist rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "📌") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("811921574071631882") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Lefkoşa rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🏢") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("811921741508771840") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Girne rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🔴") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("811921848232837152") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Güzelyurt rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "👣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("811921962237820958") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("İskele rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "❎") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813663005224992798") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Aseksuel rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🏳️‍🌈") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813401511366361128") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Biseksüel rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "👬") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813401363815333898") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Homosexual rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "👫") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("813401016170971157") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Heterosexual rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
  } else {
    return; 
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.guild.id !== "811833989827788851") return; //sunucu idnizi giriniz
  
  if (reaction.message.channel.id === "811839508370030643") { //kanal idnizi giriniz
    if (reaction.emoji.name === "🕺") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811904503556079686") // İstediğiniz Rol idsini girin
      return user.send("Erkek rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim"));
    }
    if (reaction.emoji.name === "💃") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811904803461660672"); // İstediğiniz Rol idsini giriniz
      return user.send(" Kadın rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "☪️") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813399542266855474") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("İslam rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "✝️") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813399912502001665") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Hristiyan rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "✡") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813400134862766090") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Yahudi rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🕎") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813400356049780757") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Ateist/Deist rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "📌") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811921574071631882") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Lefkoşa rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🏢") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811921741508771840") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Girne rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🔴") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811921848232837152") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Güzelyurt rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "👣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("811921962237820958") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("İskele rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "❎") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813663005224992798") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Aseksuel rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "🏳️‍🌈") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813401511366361128") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Biseksüel rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "👬") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813401363815333898") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Homosexual rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "👫") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("813401016170971157") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("Heterosexual rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
  } else {
    return;
  }
})
*/
/*///Telefon Sistemi

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch(); 
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; 
  if (!reaction.message.guild) return; 
  if (reaction.message.guild.id !== "811833989827788851") return; //Sunucu idnizi sola girin
  
  if (reaction.message.channel.id === "814556083611762768") { //Kanal idnizi sola girin
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("814356908370296842") // İstediğiniz Rol idsini girin
      return user.send("Whatsapp rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim"));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("814356527691071488"); // İstediğiniz Rol idsini giriniz
      return user.send("Twitter rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "3️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("814235492979179571") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("İnstagram rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
  } else {
    return; 
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.guild.id !== "811833989827788851") return; //sunucu idnizi giriniz
  
  if (reaction.message.channel.id === "814556083611762768") { //kanal idnizi giriniz
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("814356908370296842")//yukarıda ayarladığınız 1.rol idsini giriniz
      return user.send("Whatsapp rolü başarıyla kaldırıldı!").catch(() => console.log("Dmden Mesaj Gönderemedim."));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("814356527691071488") //yukarıda ayarladığınız 2.rol idsini giriniz
      return user.send("Twitter rolü başarıyla kaldırıldı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
    if (reaction.emoji.name === "3️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("814235492979179571") //yukarıda ayarladığınız 3.rol idsini giriniz
      return user.send("İnstagram rolü başarıyla kaldırıldı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
  } else {
    return;
  }
})*/
///////////////TAG SİSTEMİ
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = '֎'
  const sunucu = '825911059877330954'
  const kanal = '826179617282064474'
  const rol = '825913124774608896'

  try {

  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim!`)
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım!`)
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});

///////////////RP PUAN SİSTEMi
client.on("message", async (message) => {
  if(message.author.bot) return;
  if(!message.guild) return;
  let data = db.fetch("kanallar") ? db.fetch("kanallar") : null
  if(!data) data = []
    if(!data.find(e => e.channelID == message.channel.id)) return;
  let kelimeLength = message.content.split(" ").length
if(db.get(`kelime.${message.author.id}`)){
  db.add(`kelime.${message.author.id}`,kelimeLength)
}else {
db.add(`kelime.${message.author.id}`,kelimeLength)
}
})
client.on("messageDelete", async message => {
if(message.author.bot) return;
if(!message.guild) return;
let kelimeLength = message.content.split(" ").length
let data = db.get("kanallar") ? db.get("kanallar") : null
if(!data) data = []
  if(!data.find(e => e.channelID == message.channel.id)) return;
console.log(message.content)
if(db.get(`kelime.${message.author.id}`)){
db.math(`kelime.${message.author.id}`, '-', kelimeLength)
}else {
}
})
client.on("messageUpdate", async (oldMessage,message) => {
if(oldMessage.author.bot) return;
if(!oldMessage.guild) return; 
let data = db.get("kanallar") ? db.get("kanallar") : null
if(!data) data = []
  if(!data.find(e => e.channelID == message.channel.id)) return;
let kelimeLength = message.content.split(" ").length
console.log(message.content)
if(db.get(`kelime.${oldMessage.author.id}`)){
let eksi = Number(oldMessage.content.split(" ").length-kelimeLength)
db.math(`kelime.${message.author.id}`, '-', eksi)
}else {
}
})

/*///////////////////////////////////////////////////////////////////Başarım Sistemi(Polis)
client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (oldMember.roles.cache.size > newMember.roles.cache.size) {
      const Embed = new Discord.MessageEmbed();
      Embed.setColor("BLUE");
      Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
      Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
      Embed.setTimestamp()

      oldMember.roles.cache.forEach(role => {
          if (role.id === '811854183090618389') {
            let rnd= '14'
            let title = 'Basarim Kaybedildi!'
            let contents = 'Departmana Hoşgeldin'
            let içerik = 'Bu başarımı Polis Departmanına katıldığında elde edersin.'
            const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
              Embed.setImage(url);
              Embed.setDescription(içerik)
            bş.delete(`${newMember.guild.id}_${newMember.id}_başarım_polis`)
            client.channels.cache.get("836544652139692032").send(Embed);
           client.users.cache.get(newMember.id).send(Embed);
        
          }
      });


  } else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
      const Embed = new Discord.MessageEmbed();
      Embed.setColor("BLUE");
      Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
      Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
      Embed.setTimestamp()
      
      newMember.roles.cache.forEach(role => {
        if (role.id === '811854183090618389') {
            let rnd= '14'
            let title = 'Basarim Kazanildi!'
            let contents = 'Departmana Hoşgeldin'
            let içerik = 'Bu başarımı Polis Departmanına katıldığında elde edersin.'
            const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
              Embed.setImage(url);
              Embed.setDescription(içerik)
              bş.set(`${newMember.guild.id}_${newMember.id}_başarım_polis`, true)
              client.channels.cache.get("836544652139692032").send(Embed);
              client.users.cache.get(newMember.id).send(Embed);
          
          }
      });

  }
  ///////////////////////////////////////////////////////////////////Başarım Sistemi(MIT AJANI)
  if (oldMember.roles.cache.size > newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    oldMember.roles.cache.forEach(role => {
        if (role.id === '811854570061561876') {
          let rnd= '14'
          let title = 'Basarim Kaybedildi!'
          let contents = 'Beyaz Yalanlar'
          let içerik = 'Bu Başarımı MİT Ajanı olup yurt içinde bir görev tamamladığında elde edersin.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
          bş.delete(`${newMember.guild.id}_${newMember.id}_başarım_mit`)
          client.channels.cache.get("836544652139692032").send(Embed);
          client.users.cache.get(newMember.id).send(Embed);
        }
    });



} else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    newMember.roles.cache.forEach(role => {
      if (role.id === '811854570061561876') {
          let rnd= '14'
          let title = 'Basarim Kazanildi!'
          let contents = 'Beyaz Yalanlar'
          let içerik = 'Bu Başarımı MİT Ajanı olup yurt içinde bir görev tamamladığında elde edersin.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
            bş.set(`${newMember.guild.id}_${newMember.id}_başarım_mit`, true)
            client.channels.cache.get("836544652139692032").send(Embed);
            client.users.cache.get(newMember.id).send(Embed);
        }
    });


}
///////////////////////////////////////////////////////////////////Başarım Sistemi(YERALTI KIRALI)
if (oldMember.roles.cache.size > newMember.roles.cache.size) {
  const Embed = new Discord.MessageEmbed();
  Embed.setColor("BLUE");
  Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
  Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
  Embed.setTimestamp()

  oldMember.roles.cache.forEach(role => {
      if (role.id === '811903309983121419' || role.id === '813512404041990204' || role.id === '811903553459060737') {
        let rnd= '14'
        let title = 'Basarim Kaybedildi!'
        let contents = 'Yeraltı Kralı'
        let içerik = 'Bu başarımı illegal birlik oluşturduğunda elde edersin.'
        const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
          Embed.setImage(url);
          Embed.setDescription(içerik)
        bş.delete(`${newMember.guild.id}_${newMember.id}_başarım_yeraltıkralı`)
        client.channels.cache.get("836544652139692032").send(Embed);
        client.users.cache.get(newMember.id).send(Embed);
      }
  });

} else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
  const Embed = new Discord.MessageEmbed();
  Embed.setColor("BLUE");
  Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
  Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
  Embed.setTimestamp()

  newMember.roles.cache.forEach(role => {
    if (role.id === '811903309983121419' || role.id === '813512404041990204' || role.id === '811903553459060737') {
        let rnd= '14'
        let title = 'Basarim Kazanildi!'
        let contents = 'Yeraltı Kralı'
        let içerik = 'Bu başarımı illegal birlik oluşturduğunda elde edersin.'
        const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
          Embed.setImage(url);
          Embed.setDescription(içerik)
          bş.set(`${newMember.guild.id}_${newMember.id}_başarım_yeraltıkralı`, true)
          client.channels.cache.get("836544652139692032").send(Embed);
          client.users.cache.get(newMember.id).send(Embed);
      }
  });
}
  ///////////////////////////////////////////////////////////////////Başarım Sistemi(Sağ Kol)
  if (oldMember.roles.cache.size > newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    oldMember.roles.cache.forEach(role => {
        if (role.id === '813664118703521830') {
          let rnd= '14'
          let title = 'Basarim Kaybedildi!'
          let contents = 'Sağ Kol'
          let içerik = 'Bu başarımı bir illegal birliğie üye olduğunda elde edersin.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
          bş.delete(`${newMember.guild.id}_${newMember.id}_başarım_sağkol`)
          client.channels.cache.get("836544652139692032").send(Embed);
          client.users.cache.get(newMember.id).send(Embed);
        }
    });



} else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    newMember.roles.cache.forEach(role => {
      if (role.id === '813664118703521830') {
          let rnd= '14'
          let title = 'Basarim Kazanildi!'
          let contents = 'Sağ Kol'
          let içerik = 'Bu başarımı bir illegal birliğie üye olduğunda elde edersin.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
            bş.set(`${newMember.guild.id}_${newMember.id}_başarım_sağkol`, true)
            client.channels.cache.get("836544652139692032").send(Embed);
            client.users.cache.get(newMember.id).send(Embed);
        }
    });


}
  ///////////////////////////////////////////////////////////////////(Orduya Giriş)
  if (oldMember.roles.cache.size > newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    oldMember.roles.cache.forEach(role => {
        if (role.id === '811862554061045801') {
          let rnd= '14'
          let title = 'Basarim Kaybedildi!'
          let contents = 'Orduya Giriş'
          let içerik = 'Bu başarımı Harp okulundan mezun olup teğmen olduğunda elde edersin.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
          bş.delete(`${newMember.guild.id}_${newMember.id}_başarım_ordu`)
          client.channels.cache.get("836544652139692032").send(Embed);
          client.users.cache.get(newMember.id).send(Embed);
        }
    });



} else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    newMember.roles.cache.forEach(role => {
      if (role.id === '811862554061045801') {
          let rnd= '14'
          let title = 'Basarim Kazanildi!'
          let contents = 'Orduya Giriş'
          let içerik = 'Bu başarımı Harp okulundan mezun olup teğmen olduğunda elde edersin.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
            bş.set(`${newMember.guild.id}_${newMember.id}_başarım_ordu`, true)
            client.channels.cache.get("836544652139692032").send(Embed);
            client.users.cache.get(newMember.id).send(Embed);
        }
    });


}
  ///////////////////////////////////////////////////////////////////Başarım Sistemi(Sanatını Ortaya Koyma Zamanı!)
  if (oldMember.roles.cache.size > newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    oldMember.roles.cache.forEach(role => {
        if (role.id === '811904048529801236') {
          let rnd= '14'
          let title = 'Basarim Kaybedildi!'
          let contents = 'Sanatını Ortaya Koyma Zamanı!'
          let içerik = 'Bu başarımı sanatçı olduğunda kazanırsın.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
          bş.delete(`${newMember.guild.id}_${newMember.id}_başarım_sanat`)
          client.channels.cache.get("836544652139692032").send(Embed);
          client.users.cache.get(newMember.id).send(Embed);
        }
    });



} else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setAuthor(newMember.user.tag, newMember.user.avatarURL());
    Embed.setFooter(newMember.guild.name , newMember.guild.iconURL({dynamic : true}))
    Embed.setTimestamp()

    newMember.roles.cache.forEach(role => {
      if (role.id === '811904048529801236') {
          let rnd= '14'
          let title = 'Basarim Kazanildi!'
          let contents = 'Sanatını Ortaya Koyma Zamanı!'
          let içerik = 'Bu başarımı sanatçı olduğunda kazanırsın.'
          const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`
            Embed.setImage(url);
            Embed.setDescription(içerik)
            bş.set(`${newMember.guild.id}_${newMember.id}_başarım_sanat`, true)
            client.channels.cache.get("836544652139692032").send(Embed);
            client.users.cache.get(newMember.id).send(Embed);
        }
    });


}
});*/