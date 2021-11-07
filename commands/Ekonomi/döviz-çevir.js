
const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/bakiye");
 
exports.run = async (client, message, args) => {
  let islem = args[0]
  let birim = args[1]
  let miktar2 = args[2]
  let miktar = parseInt(miktar2)
  let user = message.author
if(!islem) return message.channel.send('Bir eylem girmelisin! (alış/satış)')
if(!birim) return message.channel.send('Birim girmelisin!(dolar/euro/sterlin/yen)')
if(!miktar) return message.channel.send('Miktar girmelisin!')

  const bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`)

  function ryukbla(birim)
  {
    if (birim === 'dolar') 
    {
      return "4,5";
    }
    else if (birim === 'euro')
    {
      return "5,65";
    }
    else if (birim === 'yen')
    {
      return "0,25";
    }
    else if (birim === 'sterlin')
    {
      return "7,80";
    }
    else
    {
      return "1"
    }
  }
  if(islem === 'alış') {

    let birimçeviri = parseInt(ryukbla(birim))
    let çevirme1 = miktar * birimçeviri
    let çevirme2 = parseInt(çevirme1)
    let çıktı1 = bakiye - çevirme2
    let çıktı2 = parseInt(çıktı1)

  if(bakiye < birimçeviri) {
      message.channel.send('Bakiyeniz yetersizdir!')
  }
  if(bakiye > birimçeviri) {
db.set(`${message.guild.id}_${user.id}_bakiye`, çıktı2)
db.add(`${message.guild.id}_${user.id}_döviz_${birim}`, miktar)
const döviz = db.fetch(`${message.guild.id}_${user.id}_döviz_${birim}`)
    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Döviz Çevrildi!')
    .addField('Aktif banka bakiyen', bakiye)
    .addField(`Aktif ${birim} bakiyen`, döviz)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
}
  }
  if(islem === 'satış') {

    let birimçeviri = parseInt(ryukbla(birim))
    let çevirme1 = miktar * birimçeviri
    let çevirme2 = parseInt(çevirme1)
    let çıktı1 = bakiye + çevirme2
    let çıktı2 = parseInt(çıktı1)
    const döviz1 = db.fetch(`${message.guild.id}_${user.id}_döviz_${birim}`)
    let dövizçıktı = döviz1 - miktar
  if(döviz1 < miktar) {
      message.channel.send('Döviziniz yetersizdir!')
  }
  if(döviz1 > miktar) {
db.set(`${message.guild.id}_${user.id}_bakiye`, çıktı2)
db.set(`${message.guild.id}_${user.id}_döviz_${birim}`, dövizçıktı)
const döviz = db.fetch(`${message.guild.id}_${user.id}_döviz_${birim}`)
    let embed1 = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Döviz Çevrildi!')
    .addField('Aktif banka bakiyen', çıktı2)
    .addField(`Aktif ${birim} bakiyen`, döviz)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed1)
    console.log(çıktı2)
}
  }
  }
exports.conf = {
  name: 'döviz-çevir',
  aliases: ["dövizçevir"],
  guildOnly: true,
  status: true,
  ownerGuild: false,
  consoleLog: false,
  channelLog: false,
  cooldown: 5
};
