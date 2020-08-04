const Discord = require("discord.js");
const bot = new Discord.Client();

// const token =  //isi sendiri di discord devnya / discordapp.com/devel

const PREFIX = "!";

let version = "v1.0.2";

bot.on("ready", () => {
  console.log("This bot is onlen");
});

bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

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
          "Invalid Arguments Please Use *!help* To Specific Documentation Commands "
        );
      }
      break;
    case "clear":
      if (!args[1])
        return message.reply("Error Please Define The Second Arguments");
      message.channel.bulkDelete(args[1]);
      break;
  }
});

bot.login(token);
