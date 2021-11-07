const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setColor('DARKBLUE')
.setTitle('Fiyat Listesi')
.setDescription(`
Emlak Fiyatları : <#825913291917361163> \n
Galeri Fiyatları : <#825913293230833784> \n
Motor Fiyatları : <#825913294215839785> \n
Silah Fiyatları : <#825913295135047740> \n
Petshop Fiyatları : <#825913296083222528> \n
İllegal Fiyatları : <#838786597175689276> \n
`)
.addField('Araba/Motor Komutları', `
Peugeot 206+ = !satınal peugeot-206 \n
Renault Clio = !satınal clio\n
Citroen C4 = !satınal citroen-c4\n
Volkswagen Passat = !satınal passat\n
Mercedes-Benz E200 = !satınal e200\n
Audi A5 S-Line = !satınal audi-a5\n
BMW 5.25 M = !satınal bmw-525\n
Mercedes-Benz G63 AMG = !satınal g62-amg\n
Porsche 911 Turbo = !satınal porsche-911\n
Lamborghini Huracan = !satınal huracan\n
Yamaha X-MAX = !satınal yamahamax \n 
HondaCBR = !satınal hondacbr \n 
Yamaha YZF R25 = !satınal yamahayzfr25 \n 
KTM 250 EXC = !satınal ktm \n 
Yamaha MT-07 = !satınal yamahamt \n 
Yamaha YZF R1 = !satınal yamahayzfr1 \n 
BMW S1000RR = !satınal bwms1000 \n `)
.addField('Emlak Komutları', `
Apartman Dairesi = !satınal daire\n
Dağ Evi = !satınal dağevi\n
Lüx Villa = !satınal villa\n
Malikâne = !satınal malikane\n`)
.addField('Hayvan Komutları', `
Siyam Kedisi = !satınal siyam\n
İran Kedisi = !satınal iran\n
Scottish = !satınal scottish\n
Golden = !satınal golden\n
Doberman = !satınal doberman\n
Rottweiler = !satınal rottweiler\n`)
.addField('Silah Komutları', `
Ruhsatlı CZ-75 = !satınal ruhsatlı-cz75\n
Glock19 = !satınal glock19\n
Baretta = !satınal baretta\n
Mermi = !satınal mermi`)
.addField('Diğer Market Komutları', `
Depo = !satınal ruhsatlı-cz75\n
Lancer Evo = !satınal lancerevo\n
Üretim Tezgahı = !satınal üretimtezgahı\n
Ruhsatsız CZ-75B = !satınal cz75b\n
Hat = !satınal hat \n
Telefon = !satınal telefonz`)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
    name: 'fiyat',
    aliases: ["fiyat"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 5
};