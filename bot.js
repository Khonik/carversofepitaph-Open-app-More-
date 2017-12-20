const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.hi') {
    	message.reply,message('হ্যাঁ ভাইয়া কেমন আছেন? কি অবস্থা ? বিচি খারায়?');
  	}
});

client.on('message', message => {
    if (message.content === '.hello') {
    	message.reply('oi beta tor somossa ki ato hi hlw chodau ka.valo hou teka lage na.sara din to mia afar loge thako.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);MzkzMTA3MDg5Mjk3Mzc1MjQz.DRw9DA.aTa6MsHXiDeaxT7zo0HonZ3DH3A
