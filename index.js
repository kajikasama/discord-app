const { Client, MessageAttachment, MessageEmbed } = require("discord.js"); //biasakan membuat sesuatu required dlu
const bot = new Client(); //nulis bot biar kaga ribet make perintah discord.client lagi

// const token =  //isi sendiri di discord devnya / discordapp.com/developerc

//character pemanggil botnya
const PREFIX = "~";

//versi iseng doang tpi bisa aja sih ..
let version = "v1.0.5";

//ngecek bot ready di concole log / command prompt pilihan anda
bot.on("ready", () => {
  console.log("Bot ini sudah diaktifkan, Periksa Discord Anda");
  bot.user
    .setActivity("Chandra Coding The Programs", { type: "WATCHING" })
    .catch(console.error);
});

bot.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "welcum"
  );
  if (!channel) return;
  channel.send(`Selamat datang di Indomaret, ${member}, Selamat Berbelanja ..`);
});

//buat pembangkit pesan jika terpanggil antara char dan kata yg disebutkan
bot.on("message", (message) => {
  if (!message.content.startsWith(PREFIX)) return;
  // let args = message.content.substr(PREFIX.length).split(" ");
  const args = message.content.slice(PREFIX.length).split(" "); //sambung char prefix dengan perintah yg ada

  switch (args[0]) {
    case "ping": //ngetest pesan doang kaga ada yg penting sih
      message.channel.send("pong!");
      break;
    case "website": //nampilin web yg nggak pernah dilanjutin :"(
      message.channel.send("https://guschandra.epizy.com");
      break;
    case "info": //data diri saya ehh maksudnya social media saya hehe
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
        //tulis secara spesific cuy jangan ngasal
        message.channel.send(
          "Invalid Arguments Please Use Specific Documentation Commands "
        );
      }
      break;
    case "clear":
      if (!args[1])
        //kaga ada argumen pembantu ke-2
        return message.reply("Error Please Define The Second Arguments");
      message.channel.bulkDelete(args[1]);
      break;
    case "embed": //manggil semua nama user, versi, hingga server yg dituju sang pemerintah
      const embed = new MessageEmbed()
        .setTitle("User Information")
        .addField("Player Name ", message.author.username, true)
        .addField("Version", version, true)
        .addField("Current Server", message.guild.name)
        .setColor(0xff9142)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter("Feel Free To Add Me!");
      message.channel.send(embed);
      break;
    case "iloveyou": //kau liat ini berarti anda geiii !!! jijjk aku cuk
      message.channel.send("Matane Cuk Jijik Ah ..");
      break;
    case "i": //kau liat ini berarti anda geiii !!! jijjk aku cuk cuman make spasi doang
      args[1] === "love"
        ? args[2] === "you"
          ? message.channel.send("Matane Cuk Jijik Ah `(*>﹏<*)′ ")
          : message.channel.send("Tolong Ngomong Di Perjelas ^_^ ..")
        : message.channel.send("Hmm ?? ..");
      break;
    case "send":
      const attachment = new MessageAttachment(
        "https://danbooru.donmai.us/data/__jacket_girl_touhou_and_1_more_drawn_by_ebidashi_doragon7445__897ebf02a3e0c26701f91092dbfa7b7b.jpg"
      );
      message.channel.send(message.author, attachment);
      break;
    case "sendlocal":
      const attachment2 = new MessageAttachment("./img/jacket-dipp.jpg");
      message.channel.send(message.author, attachment2);
      break;
    case "rules":
      const attachment3 = new MessageAttachment("./text/rules.txt");
      message.channel.send(message.author, attachment3);
      message.channel.send("Baca Sendiri Rulesnya Dalam Bentuk Dokumen");
      break;
    case "kick":
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick("You where kick for trolling!").then(() => {
            message.reply(`Successfully kicked ${user.tag}`).catch((err) => {
              message.reply("I was unable to kick the member");
              console.log(err);
            });
          });
        } else {
          message.reply(`That user isn't in the this world`);
        }
      } else {
        message.channel.send("you need to specify a preson!");
      }
      break;
  }
});
//buat token utk connect botnya tanpa ini kaga bisa connect ke botnya
bot.login(token);
