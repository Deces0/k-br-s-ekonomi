const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/özeleşya");
    const qdb = new JsonDatabase("./database/bakiye");
    const adb = new JsonDatabase("./database/telefon");
    const gt = new JsonDatabase("./database/global_telefon");
    const sdb = new JsonDatabase("./database/silah")
    const hdb = new JsonDatabase("./database/hayvan")
    const mdb = new JsonDatabase("./database/mülk");
    const rdb = new JsonDatabase("./database/araba");
    const pdb = new JsonDatabase("./database/plaka");
    let eşya = args[0]
    let silah = args[0]
    let mülk = args[0]
    let araba = args[0]
    let user = message.author
    var arr1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Y', 'W', 'X', 'Z', 'Q']
    var arr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Y', 'W', 'X', 'Z', 'Q']
    var arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Y', 'W', 'X', 'Z', 'Q']
    var arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Y', 'W', 'X', 'Z', 'Q']
    var arr5 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    var arr6 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    var plaka1 = random_item(arr1)
    var plaka2 = random_item(arr2)
    var plaka3 = random_item(arr3)
    var plaka4 = random_item(arr4)
    var plaka5 = random_item(arr5)
    var plaka6 = random_item(arr6)
    var plaka = plaka1 + plaka2 + ' ' + plaka5 + plaka6 + ' ' + plaka3 + plaka4 
    let para = qdb.get(`${message.guild.id}_${user.id}_bakiye`)
    if(!eşya || !silah || !mülk || !araba) return message.reply('Bir eşya belirt! (Liste için !fiyat)')

    if(araba === 'peugeot-206'){
        let miktar = '25000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
        client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'clio'){
        let miktar = '27000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${plaka}`, {ArabaAd:araba, Sahip:user.id} )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        console.log(plaka)
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'citroen-c4'){
        let miktar = '32000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'passat'){
        let miktar = '40000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'e200'){
        let miktar = '85000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'auidi-a5'){
        let miktar = '90000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'bwm-525'){
        let miktar = '90000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'g62-amg'){
        let miktar = '250000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'porsche-911'){
        let miktar = '300000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'huracan'){
        let miktar = '500000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'yamahamax'){
        let miktar = '15000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'hondacbr'){
        let miktar = '17000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'yamahayzfr25'){
        let miktar = '20000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'ktm'){
        let miktar = '20000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'yamahamt'){
        let miktar = '37000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'yamahayzfr1'){
        let miktar = '20000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'bwms1000'){
        let miktar = '65000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        pdb.push(`${message.guild.id}_${user.id}_plaka`, {Plaka:plaka, ArabaAd:araba, Sahip:user.id} )
        message.reply('Araba satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${araba} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'malikane'){
        let miktar = '2000000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${mülk} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'daire'){
        let miktar = '200000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${mülk} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'dağevi'){
        let miktar = '300000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${mülk} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'villa'){
        let miktar = '1000000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${mülk} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }

    if(eşya === 'siyam'){
        let miktar = '5000'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${eşya} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(eşya === 'iran'){
        let miktar = '5000'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${eşya} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(eşya === 'scottish'){
        let miktar = '5000'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${eşya} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(eşya === 'golden'){
        let miktar = '7500'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${eşya} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(eşya === 'doberman'){
        let miktar = '7500'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${eşya} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(eşya === 'rottweiler'){
        let miktar = '7500'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${eşya} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'ruhsatlı-cz75'){
        let miktar = '25000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        sdb.add(`${message.guild.id}_${user.id}_mermi`, 12 )
        message.reply('Silah satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'glock19'){
        let miktar = '25000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        sdb.add(`${message.guild.id}_${user.id}_mermi`, 12 )
        message.reply('Silah satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'baretta'){
        let miktar = '25000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        sdb.add(`${message.guild.id}_${user.id}_mermi`, 12 )
        message.reply('Silah satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'mermi'){
        let miktar = '6000'
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.add(`${message.guild.id}_${user.id}_mermi`, 12 )
        message.reply('Mermi satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'depo'){
        let miktar = '20000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'lancerevo'){
        let miktar = '200000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'üretimtezgahı'){
        let miktar = '200000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'cz75b'){
        let miktar = '40000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah ),
                sdb.add(`${message.guild.id}_${user.id}_mermi`, 12 )
        message.reply('Silah satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'hat'){
        let sa = adb.get(`${message.guild.id}_${user.id}_hat`)
        if(sa === 'true') return message.reply('Çoktan bir hattınız var!')
        let miktar = '500'
        if(db.fetch(`${message.guild.id}_${user.id}_özeleşya`, silah ) === true) {
            return message.reply('Bu eşya sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        function randomNumber(min, max){
            const r = Math.random()*(max-min) + min
            return Math.floor(r)
        }
        let numaram = `0${randomNumber(499, 599)}${randomNumber(99, 999)}${randomNumber(99, 999)}`
        db.push(`${message.guild.id}_${user.id}_özeleşya`, silah )
        adb.set(`${message.guild.id}_${user.id}_hat`, true )
        adb.set(`${message.guild.id}_${user.id}_numaram`, `${numaram}` )
        gt.set(`${message.guild.id}_${numaram}`, `${user.id}`)
        message.reply('Hat satın alındı!')
        user.send(`Numaranız: ${numaram}`)
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'telefon'){
        let miktar = '2000'
        if(db.fetch(`${message.guild.id}_${user.id}_özeleşya`, silah ) === true) {
            return message.reply('Bu eşya sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        adb.set(`${message.guild.id}_${user.id}_telefontürü`,silah )
        db.set(`${message.guild.id}_${user.id}_özeleşya`, silah)
        message.reply('Telefon satın alındı!')
                let kalan = para - miktar
            client.guilds.cache.get('825911059877330954').client.channels.cache.get('836418890585866281').send(`${user} adlı kişi ${silah} satın aldı!`)
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
};

exports.conf = {
    name: 'satınal',
    aliases: ["satın-al"],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 10
};