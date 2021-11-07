const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/telefon");
const gt = new JsonDatabase("./database/global_telefon");


exports.run = async (client, message, args) => {

    function user_info(id) {
        if (!id) return undefined
        if (id) {
            var asa = gt.get(`${message.guild.id}_${id}`)
        } return asa
    }
let ayar = args[0]
if(!ayar) {
    let embed = new Discord.MessageEmbed()
    .setAuthor('Belorya RP')
    .setColor('BLUE')
    .setTitle(`Telefonunla yapabileceğin bir kaç özellik bulunmakta.`)
    .setDescription(`
    💠 !telefon numaram - Numaranızı görüntülersiniz. \n\n
    💠 !telefon ara - Belirttiğiniz numarayı ararsınız. Numara sahibine DM üzerinden giden çağrı kabul olursa, iki taraftan biri !çağrı-kapat komutunu kullanana kadar sadece ikisinin görebildiği özel bir kanal açılacak. Çağrı kapat komutu ile kanal silinecek. \n\n
    💠 !telefon mesaj-gönder - Belirttiğiniz numaranın sahibine belirttiğiniz mesajı iletilmesini sağlayabilirsiniz. Eğer belirttiğiniz numaranın sahibini mesaj gönderilemeyecek durumda ise(dm kapalı, botu engellemiş) o kişiye SMS atamayacaksınız. \n\n
    💠 !telefon kaydet <numara> <isim> - Belirttiğiniz numarayı belirttiğiniz isim ile rehberinize kaydedersiniz. \n\n
    💠 !telefon sil <numara> - Belirtilen numarayı rehberinizden kaldırırsınız. \n\n
    💠 !telefon rehber - Rehberinizde ekli olan tüm numaraları isimleriyle beraber görüntülersiniz. \n\n
    💠 !telefon bul <isim>/<numara> - Bir Polis memuruysanız, bu komut sayesinde dilerseniz girdiğiniz kişinin isminden dilerseniz girdiğiniz telefon numarasından telefonun bilgilerine erişebileceksiniz. \n\n
    `)
    .setFooter(`
    -------------------------------------------------------------------------------------------------------------------\n
ÖNEMLİ NOT: Bu komudu troll amaçlı kullananlanlar yetkilinin insifiyatine göre 24 saat ile 72 saat arasına Rol Yasağı, artı olarak 16 saat mute yiyecektir. Hâla tekrarlamaya devam ederse sunucudan yasaklanmaya kadar gidecektir.`)
message.channel.send(embed)
}
if(ayar === 'numaram') {
    let numaram = db.get(`${message.guild.id}_${message.author.id}_numaram`) || 'Numaran Yok! Bir sim kartı al!'
    let embed = new Discord.MessageEmbed()
    .setAuthor('Belorya RP')
    .setColor('BLUE')
    .setTitle(`${numaram}`)
    message.channel.send(embed)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(ayar === 'ara') {
    let karşı = args[1]
    let arama = db.get(`${message.guild.id}_${message.author.id}_arama`)
    if(arama) return message.reply('Lütfen önce aramayı kapatın!')
    if(!karşı) return message.reply('Kimi aramak istiyorsanız numarasını/ismini girmelisiniz!')
    var numara = user_info(karşı) ||  karşı.replace('<@!', '').replace('>', '')
    let kişi = client.users.cache.get(numara)
    if(kişi.id === message.member.id) return message.reply('Kendini aramayazsın!')
    const embed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Yeni bir araman var.')
.setDescription(`Aramayı Gönderen Kişi: <@${message.member.id}>\n\n Kabul etmek için : '👍'\n Reddetmek için: '👎'`)
.setThumbnail('https://cdn.discordapp.com/attachments/793443164777349122/836256508182003712/mesaj.png')
kişi.send(embed).then(msg => {
    msg.react('👍').then(() => msg.react('👎'));
    
    const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '👍') {
              message.guild.channels.create(`│${kişi}│${message.author.username}`, {
                    type: 'text',        
            })
                .then(ch => {
                    let kategori = 'TELEFON'
                    let kontrol = message.guild.channels.cache.find(ch => ch.name === kategori)
                    if(kontrol === undefined) {
                    } else {
                        ch.setParent(message.guild.channels.cache.find(ch => ch.name === kategori))
                    }     
                    message.guild.roles.cache.forEach((role) => {
                        ch.createOverwrite(message.author.id,{
                            VIEW_CHANNEL: true,
                        }).catch(e => { })
                        ch.createOverwrite(message.guild.id,{
                            VIEW_CHANNEL: false,
                        }).catch(e => { })
                        ch.createOverwrite(kişi.id,{
                            VIEW_CHANNEL: true,
                        }).catch(e => { })
            
                    }
                    )
                    ch.send(`<@${message.author.id}> ile <@${kişi.id}> arasında iletişim sağlandı!`).catch()
                    db.set(`${message.guild.id}_${message.author.id}_arama`, ch.id)
                })
            } else {
                kişi.send('Arama Reddedildi!');
                message.channel.send('Arama Reddedildi!');
            }
        })
        .catch(collected => {
            message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
        });
      
    })
message.delete()
message.channel.send(`<@${message.member.id}> Araman başarıyla '${karşı}' numaralı kişiye ulaştı!`) 

    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(ayar === 'mesaj-gönder') {
let karşı = args[1]
let mesaj = args.slice(2).join(" ")
if(!karşı) return message.reply('Mesaj göndereceğin kişinin telefon numarasını girmelisin!')
if (karşı.length !== 10) return message.reply("Lütfen geçerli bir numara giriniz.")
let numara = user_info(karşı)
let kişi = client.users.cache.get(numara)
if(kişi.id === message.member.id) return message.reply('Kendini mesaj atamazsın!')
const embed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Yeni bir mesajın var.')
.setDescription(`Mesaj Gönderen Kişi: <@${message.member.id}>\n\nKişinin Mesajı: \`${mesaj}\``)
.setThumbnail('https://cdn.discordapp.com/attachments/793443164777349122/836256508182003712/mesaj.png')
kişi.send(embed);
message.delete()
message.channel.send(`<@${message.member.id}> Mesajın başarıyla '${karşı}' numaralı kişiye ulaştı!`)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(ayar === 'kaydet') {
    let karşı = args[1]
    let isim = args.slice(2).join(" ")
    if(!karşı) return message.reply('Kaydeteceğin kişinin telefon numarasını girmelisin!')
    if (karşı.length !== 10) return message.reply("Lütfen geçerli bir numara giriniz.")
    if(!isim) return message.reply('Lütfen kişinin ismini girin.')
    const embed = new Discord.MessageEmbed()
    .setTitle('Belorya RP')
    .setColor('BLUE')
    .setDescription(`
    💠 "${karşı}" numarası "${isim}" ile kaydedildi!
    `)
    message.channel.send(embed)
    db.push(`${message.author.id}_rehber}`,`${karşı} | ${isim}`)
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(ayar === 'rehber') {
    let numara = `${db.fetch(`${message.author.id}_rehber}`)}`
    if( numara === 'null' || numara === '') {
        let filter = 'Kayıtlı Numara Yok'
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} adlı kişinin rehberi`)
        .setColor('BLUE')
        .setAuthor('Belorya RP')
        .setDescription(`
         **${filter}**
        `)
        message.channel.send(embed)
    } else {
        let filter =   `${numara.split(',').join('\n')} ` || ` ${numara}`
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} adlı kişinin rehberi`)
        .setColor('BLUE')
        .setAuthor('Belorya RP')
        .setDescription(`
         **${filter}**
        `)
        message.channel.send(embed)
    }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(ayar === 'sil') {
    let karşı = args[1]
    if(!karşı) return message.reply('Sileceğin kişinin telefon numarasını girmelisin! (Örnek: 0547298074)')
    let numara = `${db.fetch(`${message.author.id}_rehber}`)}`
    db.delete(`${message.author.id}_rehber}`);
    let arr = [numara]
    const index = arr.findIndex(el => el.trim().split(" ")[0] == karşı);
    arr.splice(index, 1);
    db.push(`${message.author.id}_rehber}`, arr)
    let numara3 = `${db.fetch(`${message.author.id}_rehber}`)}`
    if( numara3 === 'null' || numara3 === '') {
        let filter = 'Kayıtlı Numara Yok'
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} adlı kişinin rehberi`)
        .setColor('BLUE')
        .setAuthor('Belorya RP')
        .setDescription(`
         **${filter}**
        `)
        message.channel.send(embed)
    } else {
        let filter =   `${numara3.split(',').join('\n')} ` || ` ${numara3}`
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} adlı kişinin rehberi`)
        .setColor('BLUE')
        .setAuthor('Belorya RP')
        .setDescription(`
         **${filter}**
        `)
        message.channel.send(embed)
    }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(ayar === 'bul') {
    let ayar2 = args[1]
    let karşı = args[2]
    if(!message.member.roles.cache.has('811854183090618389')) {
        return message.reply("**Yetkin yok!**").then(msg => msg.delete({timeout:20000}))
    }
    if(ayar2 === 'numara') {
        let sa = gt.get(`${message.guild.id}_${karşı}`)
        if(sa !== 'null') {
            const embed = new Discord.MessageEmbed()
            .setTitle(`POLIS SORUŞTURMA SISTEMI`)
            .setColor('BLUE')
            .setAuthor('Belorya RP')
            .setDescription(`
             **${karşı}** numarasına sahip kişi : **<@!${sa}>**
            `)
            message.channel.send(embed)
        }
    }
    if(ayar2 === 'kişi') {
        let karşı2 = karşı.replace('<@!', '')
        let karşı3 = karşı2.replace('>', '')
        let numara = db.get(`${message.guild.id}_${karşı3}_numaram`)
        const embed = new Discord.MessageEmbed()
        .setTitle(`POLIS SORUŞTURMA SISTEMI`)
        .setColor('BLUE')
        .setAuthor('Belorya RP')
        .setDescription(`
         **${karşı}** adlı kişinin numarası : **${numara}**
        `)
        message.channel.send(embed)
    }
    }
};

exports.conf = {
    name: 'telefon',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 1
};