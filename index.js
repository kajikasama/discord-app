const Discord = require('discord.js');
const bot = new Discord.Client();

// const token =  //isi sendiri

bot.on('ready', () => {
  console.log('This bot is onlen');
});

bot.on('message', msg=> {
  if(msg.content === 'Halo' || msg.content === 'halo' || msg.content === 'halo jacket' || msg.content === 'Halo Jacket')
  {
    msg.reply('Halo Gayn');
  }
});
bot.on('message', msg=> {
  if(msg.content === 'nama kamu siapa ?')
  {
    msg.reply(
      'Perkenalkan, nama saya **Jacket** bisa juga '+
      '**Jacket Girl** saya asli *prancis* kadang tinggal di *gensokyo*'+
      ' hanya menjengunk ke-7 saudara saya yang ada disana ..'
      );
  }
});

bot.login(token);