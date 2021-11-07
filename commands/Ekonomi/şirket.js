const Discord = require('discord.js');
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/şirket");
const qdb = new JsonDatabase("./database/bakiye");
var moment = require('moment')
moment.locale();

exports.run = async (client, message, args) => {
let ayar = args[0]
let user = message.author
if(!ayar) return message.reply('Lütfen bir komut belirtin. Komut listesi için !yardım')

if(ayar === 'aç') {
let fiyat = 250000  
let saat = moment().format('LLLL')
let isim = args.slice(1).join(" ")
let kontrol1 = db.has(`${message.guild.id}_${user.id}_şirket_${isim}`)
let kontrol2 = qdb.get(`${message.guild.id}_${user.id}_bakiye`)


if(!isim) return message.reply('Lütfen bir isim belirtin.')
if(kontrol1 === true) return message.reply('Hey senin çoktan bir şirketin var!')
if(kontrol2 < fiyat) return message.reply('Yeterli paran yok!')


db.set(`${message.guild.id}_${user.id}_şirket_${isim}`, 100)
db.set(`${message.guild.id}_${user.id}_şirket_${isim}_tarih`, saat)
db.push(`${message.guild.id}_${isim}_hissedar`, user.id)
db.push(`${message.guild.id}_${user.id}_hisselerim`, isim)
db.push(`${message.guild.id}_şirketler`, isim)
db.set(`${message.guild.id}_${isim}_sahibi`, user.id)
qdb.math(`${message.guild.id}_${user.id}_bakiye`, '-', fiyat)
let embed = new Discord.MessageEmbed()
.setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
.setDescription(`Sayın ${user}, ${isim} adlı şirketiniz kurulmuş ve 100 adet hisseye bölünmüştür!`)
.addField('Şirket Komutları', `!şirket hisselerim \n !şirket hisse-listesi <Şirket Adı>\n !şirket bilgi <Şirket ismi> \n !şirket hissem <şirket ismi>`)
.setColor('BLUE')
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
}
if(ayar === 'hisselerim') {
let hisse = db.get(`${message.guild.id}_${user.id}_hisselerim`) || 'Hissen yok!'
let filter = hisse.join('\n ')
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
    .setDescription(`**Sayın ${user}, içinde hisselerinizin bulunduğı şirketler ve değerleri aşağıdaki gibidir.**\n-----------------------------\n **[${filter}]** \n-----------------------------\n \nŞirketlerin içindeki hisselere bakmak için !şirket bilgi <şirket ismi>`)
    .addField('Şirket Komutları', `!şirket hisselerim \n !şirket hisse-listesi <Şirket Adı>\n !şirket bilgi <Şirket ismi> \n !şirket hissem <şirket ismi>`)
    .setColor('BLUE')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    }
if(ayar === 'hisse-sat') {
let isim = args[1]
let miktar = args[2]
let kişi = message.mentions.users.first()
let fiyat = args[3]
let hisse = db.get(`${message.guild.id}_${user.id}_şirket_${isim}`)
let karşıpara = qdb.get(`${message.guild.id}_${kişi.id}_bakiye`)
let fiyat2 = parseInt(fiyat)
let miktar2 = parseInt(miktar)
let gerçekfiyat = fiyat2 * miktar2
if(kişi.id === user.id) return message.reply('Kendine birşey satamazsın!')
if(hisse === 'null'|| hisse === '') return message.channel.send('Bu şirkette hissen yok!')
if(!miktar) return message.reply('Lütfen hisse başı olacak şekilde fiyat girmeyi unutmayın! Örnek: 100 hissenin 90 tanesini birine satacaksın. 90 Yazmalısın')
if(hisse < miktar) return message.reply('Yeterli hissen yok!')
if(!kişi) return message.reply('Kime satacaksın? Lütfen birini etiketle.')
if(!fiyat) return message.reply('Lütfen hisse başı olacak şekilde fiyat girmeyi unutmayın! Örnek: 100 hissenin 90 tanesini birine satacaksın. Adet başı 10 TL olmasını istiyorsan 10 yaz.')

message.channel.send('Satış isteği gönderildi!')
const onayembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor("Hisse Satış Komutu")
    .setFooter("Satın almak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
    .setDescription(`**Sayın ${kişi}, ${user} tarafından size "${isim}" adlı şirketin \`"${miktar2}"\` adet hissesi satılmak istenmektedir. Birim fiyatı: \`"${fiyat2}"\` Gerçek Fiyatı: \`"${gerçekfiyat}\`**"`)
    client.users.cache.get(kişi.id).send(onayembed).then(msg => {
  msg.react('👍').then(() => msg.react('👎'));
  
  const filter = (reaction, user1) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user1.id === kişi.id;
  };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
          const reaction = collected.first();
  
          if (reaction.emoji.name === '👍') {
            if(karşıpara < gerçekfiyat) return message.reply('Yeterli paran yok!')
            qdb.math(`${message.guild.id}_${kişi.id}_bakiye`, '-', gerçekfiyat)
            qdb.math(`${message.guild.id}_${user.id}_bakiye`, '+', gerçekfiyat)
            db.math(`${message.guild.id}_${user.id}_şirket_${isim}`, "-", miktar2)
            db.math(`${message.guild.id}_${kişi.id}_şirket_${isim}`, "+", miktar2)
            const green = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setAuthor("Hisse Satış Komutu")
    .setDescription(`**Sayın ${kişi}, ${user} tarafından size "${isim}" adlı şirketin \`"${miktar2}"\` adet hissesi satılmıştır. Gerekli miktar bakiyenizden düşülmüştür. Birim fiyatı: \`"${fiyat2}"\` Gerçek Fiyatı: \`"${gerçekfiyat}\`**"`)
    client.users.cache.get(kişi.id).send(green).then(msg1 => {
        msg1.delete({timeout:10000})
    })
    const sa = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setAuthor("Hisse Satış Komutu")
    .setDescription(`**Sayın ${user}, ${kişi} adlı kişiye "${isim}" adlı şirketin \`"${miktar2}"\` adet hissesi satılmıştır. Gerekli miktar bakiyenize eklenmiştir. Birim fiyatı: \`"${fiyat2}"\` Gerçek Fiyatı: \`"${gerçekfiyat}\`**"`)
    client.users.cache.get(user.id).send(sa).then(msg2 => {
        msg2.delete({timeout:10000})
    })
        msg.delete({timeout:10000})
          } else {
            const green = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTimestamp()
            .setAuthor("Hisse Satış Komutu")
            .setDescription(`**Sayın ${kişi}, ${user} tarafından size "${isim}" adlı şirketin \`"${miktar2}"\` adet hissesi satılamamıştır. Gerekli bilgi satıcıya verilmiştir.**"`)
            client.users.cache.get(kişi.id).send(green).then(msg3 => {
                msg3s.delete({timeout:10000})
            })
        msg.delete({timeout:10000})
          }
      })
      .catch(collected => {
          message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
          console.log(collected)
      });
    
  })

    }
if(ayar === 'hisse-listesi') {
let isim = args.slice(1).join(" ")
if(!isim) return message.reply('Lütfen bir isim belirtin.')
let hissedar = db.get(`${message.guild.id}_${isim}_hissedar`)
let hisse = [hissedar]
let hisse2 = []
for (i = 0; i < hisse.length; i++) {
    hisse2.push('<@'+hisse[i]+'>') 
}
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
    .setDescription(`**Sayın ${user}, ${isim} adlı şirketin içindeki hissedarlar şu şekildedir:** \n \n **[${hisse2}]** \n \n ** Kendi hisse durumunuza bakmak için !şirket hissem <şirket ismi> **`)
    .addField('Şirket Komutları', `!şirket hisselerim \n !şirket hisse-listesi <Şirket Adı>\n !şirket bilgi <Şirket ismi> \n !şirket hissem <şirket ismi>`)
    .setColor('BLUE')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    }
if(ayar === 'hissem') {
let isim = args.slice(1).join(" ")
if(!isim) return message.reply('Lütfen bir isim belirtin.')
let hisse = db.get(`${message.guild.id}_${user.id}_şirket_${isim}`)
let filter = '%'+hisse
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
    .setDescription(`**Sayın ${user}, ${isim} adlı şirketin içindeki hisseniz şu şekildedir:** \n \n **[${filter}]** \n \n`)
    .addField('Şirket Komutları', `!şirket hisselerim \n !şirket hisse-listesi <Şirket Adı>\n !şirket bilgi <Şirket ismi> \n !şirket hissem <şirket ismi>`)
    .setColor('BLUE')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    }
if(ayar === 'bilgi') {
let isim = args.slice(1).join(" ")
if(!isim) return message.reply('Lütfen bir isim belirtin.')
let sahip = db.get(`${message.guild.id}_${isim}_sahibi`)
let saat = db.get(`${message.guild.id}_${user.id}_şirket_${isim}_tarih`)
let hissedar = db.get(`${message.guild.id}_${isim}_hissedar`)
let hisse = [hissedar]
let hisse2 = []
for (i = 0; i < hisse.length; i++) {
    hisse2.push('<@'+hisse[i]+'>') 
}
let sahiphisse = db.get(`${message.guild.id}_${sahip}_şirket_${isim}`)
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
    .setDescription(`**Sayın ${user}, sizin için ${isim} adlı şirketin bilgilerini topladım! Bilgiler sırası ile: \n\n Sahibi: <@${sahip}> \n\n Kuruluş Zamanı: ${saat} \n\n Hissedar Listesi: \n [${hisse2}] \n\n Sahip Hissesi: %${sahiphisse }**`)
    .addField('Şirket Komutları', `!şirket hisselerim \n !şirket hisse-listesi <Şirket Adı>\n !şirket bilgi <Şirket ismi> \n !şirket hissem <şirket ismi>`)
    .setColor('BLUE')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
    }
};
exports.conf = {
    name: 'şirket',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};