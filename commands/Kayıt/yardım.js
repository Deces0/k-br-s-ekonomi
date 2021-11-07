const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const filter = (reaction, user) => {
        return ["🏠", "💵", "🛠️", "💼", "📱"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
      };
      
        const yardım = new Discord.MessageEmbed()
            .setColor("BLUE")
        .setTitle('BeloryaRP Yardım Menüsü')
        .setDescription(`**Ana Menü: 🏠 \n Ekonomi Komutları: 💵 \n Kayıt Komutları: 🛠️ \n RP Sistemi: 💼 \n Telefon Sistemi: 📱 **`)
       var menü = await message.channel.send(yardım)
       const collector = menü.createReactionCollector(filter, { time: 200000 });
        let emojiler = ["🏠", "💵", "🛠️", "💼", "📱"]
        for (i = 0; i < emojiler.length; i++) {
            await menü.react(emojiler[i])
        }
        
      // GENEL BAŞ
      collector.on('collect', (reaction, user) => {
      
        
           if(reaction.emoji.name == "💵") {
          const genels = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Ekonomi Komutları")
            .addField(`!bakiye`, "Bakiyenizi Gösterir.")
            .addField(`!döviz-bakiye`, "Döviz Bakiyenizi Gösterir.")
            .addField(`!döviz-çevir <işlem> <birim> <miktar>`, "Döviz Çevirirsiniz")
            .addField(`!maaş`, "Maaş çekersiniz.")
            .addField(`!para-aktar <kişi> <miktar>`, "Paranızdan Belirtilen Miktarı Başka Kullanıcıya Gönderir.")
          .addField(`!para-at`, "Belirtilen miktarı bankaya Atarsınız")
          .addField(`!paraçek`, "Bankanızdan Belirtilen Miktardaki Parayı Çekersiniz.")
          .addField(`!paraekle`, "Para Eklersiniz :eyes:")
          .addField(`!parasil`, "Para Silersiniz :danger:")
          .addField(`!şirket <aç/hisselerim/hisse-listesi/hissem/bilgi/hisse-sat>`, "Şirket komutlarına bakarsınız!")
          .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
          .setTimestamp()
       
       menü.edit(genels)
        }
       if(reaction.emoji.name == "🏠") {
       menü.edit(yardım)
        }
      });
      
      
        
      // GENEL SON
      
      // EĞLENCE BAŞ
      collector.on('collect', (reaction, user) => {
      
        
          if(reaction.emoji.name == "🛠️") {
         const denemes = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setTitle("Kayıt Komutları")
         .addField(`!kayıt`, "Kayıt ekibini çağırırsınız.")
         .addField(`!kayıt-ol`, "Kimlik oluşturursunuz!")
         .addField(`!kayıt-silme <kişi> <hikaye/özellik>`, "Belirtilen kişinin kimliğini silersiniz.")
         .addField(`!kimlik`, "Kimliğe bakarsınız.")
       .addField(`!otorol yardım`, "Otorol komutlarını bulursunuz!")
       .addField(`!yeni`, "Yeni gelen parasını çekersiniz!")
       .addField(`!öneri <mesaj>`, "Öneride bulunursunuz!")
       .addField(`!istek <mesaj>`, "İstekte bulunursunuz!!")
       .addField(`!şikayet <mesaj>`, "Şikayet bildirirsiniz!")
       .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
       .setTimestamp()
      
      
      menü.edit(denemes)
       }
      if(reaction.emoji.name == "🏠") {
      menü.edit(yardım)
       }
      });
      
      
       
      // EĞLENCE SON
 // EĞLENCE BAŞ
 collector.on('collect', (reaction, user) => {
      
        
    if(reaction.emoji.name == "💼") {
   const denemes = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("RP Komutları")
     .addField(`!kontrol `, "Envanter Kontrolü.")
     .addField(`!fiyat`, "Fiyat Listesini Gösterir.")
     .addField(`!item`, "Eşya verip almanızı sağlar")
     .addField(`!rplist`, "RP yapılan kanallar listesine bakarsınız!")
     .addField(`!vur <@kişi>`, "Birine saldırırsınız!")
     .addField(`!ye`, "Canınızı doldurursunuz!")
   .addField(`!satınal <ismi>`, "Eşya/Mülk/Hayvan/Silah/Hat/Telefon Alırsınız")
   .addField(`!git <Şehir ismi>`,`İstediğiniz şehre gidersiniz`)
   .addField(`!oylama`,`Oylama açarsınız`)
   .addField(`!başarım <ver/al/kontrol/liste>`, "Başarım komutlarını kullanırsınız!")
   .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
   .setTimestamp()

menü.edit(denemes)
 }
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
 }
});


 
// EĞLENCE SON
 // EĞLENCE BAŞ
 collector.on('collect', (reaction, user) => {
      
        
    if(reaction.emoji.name == "📱") {
   const denemes = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("Telefon Komutları")
   .addField(`!telefon ara <numara>`, "Belirttiğiniz numarayı ararsınız. Numara sahibine DM üzerinden giden çağrı kabul olursa, iki taraftan biri !çağrı-kapat komutunu kullanana kadar sadece ikisinin görebildiği özel bir kanal açılacak. Çağrı kapat komutu ile kanal silinecek")
   .addField(`!telefon mesaj-gönder <numara> `, "Belirttiğiniz numaranın sahibine belirttiğiniz mesajı iletilmesini sağlayabilirsiniz. Eğer belirttiğiniz numaranın sahibini mesaj gönderilemeyecek durumda ise(dm kapalı, botu engellemiş) o kişiye SMS atamayacaksınız.")
   .addField(`!telefon kaydet <numara> `, "Belirttiğiniz numarayı belirttiğiniz isim ile rehberinize kaydedersiniz.")
   .addField(`!telefon sil <numara>`, "Belirtilen numarayı rehberinizden kaldırırsınız.")
   .addField(`!telefon rehber`, " Rehberinizde ekli olan tüm numaraları isimleriyle beraber görüntülersiniz.")
 .addField(`!telefon bul <isim>/<numara>`, "Bir Polis memuruysanız, bu komut sayesinde dilerseniz girdiğiniz kişinin isminden dilerseniz girdiğiniz telefon numarasından telefonun bilgilerine erişebileceksiniz.")
 .addField(`!telefon numaram`, "Numaranızı görüntülersiniz")
 .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
 .setTimestamp()


menü.edit(denemes)
 }
if(reaction.emoji.name == "🏠") {
menü.edit(yardım)
 }
});


 
// EĞLENCE SON
};

exports.conf = {
    name: 'yardım',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};