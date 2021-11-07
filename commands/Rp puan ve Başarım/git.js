const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/bakiye");
exports.run = async (client, message, args) => {
let ayar = args[0]
const bursa = '825913140981530687'
const istanbul = '825913142247686244'
const izmir = '825913143792107530'
const ankara = '825913143041327124'

if(!ayar) return message.reply('Bir şehir belirtin! Şehir listesi = <Paris/Lyon/Marsilya/Korsika>')
if(ayar === 'Paris')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(bursa);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(istanbul)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(izmir)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(ankara)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
if(ayar === 'Lyon')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(istanbul);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(bursa)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(izmir)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(ankara)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
if(ayar === 'Marsilya')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(ankara);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(istanbul)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(izmir)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(bursa)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
if(ayar === 'Korsika')
{
    await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.add(izmir);
    try {
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(istanbul)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(ankara)
        await client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.remove(bursa)
    } catch(err) {}
    db.math(`${message.guild.id}_${message.author.id}_bakiye`, '-', 1000)
    message.reply('Para kesildi ve şehrin değiştirildi!')
}
}
exports.conf = {
    name: 'git',
    aliases: [""],
    guildOnly: true,
    status: true,
    ownerGuild: false,
    consoleLog: false,
    channelLog: false,
    cooldown: 100
};