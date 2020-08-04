const Discord = require("discord.js");
const bot = new Discord.Client();

// const token =  //isi sendiri di discord devnya / discordapp.com/developer
const token = "NzM5ODQ1NzI0NDM4NzkwMjA0.XygZBg.0EY6xMM1JL9kSdarx07kat2tvvw";

const PREFIX = "~";

let version = "v1.0.3";

bot.on("ready", () => {
  console.log("Bot ini sudah diaktifkan, Periksa Discord Anda");
});

bot.on("message", (message) => {
  if (!message.content.startsWith(PREFIX)) return;
  // let args = message.content.substr(PREFIX.length).split(" ");
  const args = message.content.slice(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.channel.send("pong!");
      break;
    case "website":
      message.channel.send("https://guschandra.epizy.com");
      break;
    case "info":
      if (args[1] === "version") {
        message.channel.send("Jacket Bot Version " + version);
      } else if (args[1] === "socialmedia") {
        message.channel.send("Facebook : https://fb.me/banana.garuda");
        message.channel.send("Instagram : https://instagram.com/guschan12/");
        message.channel.send("Twitter : https://twitter.com/KajikajiaSama");
        message.channel.send("Github : https://github.com/kajikasama/");
        message.channel.send(
          "Youtube : https://youtube.com/channel/UC3YVyXSX2L1B3HHxCVBfCDw/"
        );
      } else {
        message.channel.send(
          "Invalid Arguments Please Use Specific Documentation Commands "
        );
      }
      break;
    case "clear":
      if (!args[1])
        return message.reply("Error Please Define The Second Arguments");
      message.channel.bulkDelete(args[1]);
      break;
    case "embed":
      const embed = new Discord.MessageEmbed()
        .setTitle("User Information")
        .addField("Player Name ", message.author.username, true)
        .addField("Version", version, true)
        .addField("Current Server", message.guild.name)
        .setColor(0xff9142)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter("Feel Free To Add Me!");
      message.channel.send(embed);
      break;
    case "iloveyou":
      message.channel.send("Matane Cuk Jijik Ah ..");
      break;
    case "i":
      args[1] === "love"
        ? args[2] === "you"
          ? message.channel.send("Matane Cuk Jijik Ah `(*>﹏<*)′ ")
          : message.channel.send("Tolong Ngomong Di Perjelas ^_^ ..")
        : message.channel.send("Hmm ?? ..");
      break;
  }
});

bot.login(token);
