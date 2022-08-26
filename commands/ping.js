const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('Botunuz Çalışıyor https://zekiarda.xyz')
};

exports.settings = {  
  name: "deneme",
  guildOnly: true,
  aliases: [],
};
