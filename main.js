const { Client } = require('discord.js');
const client = new Client({disableEveryone: true});


//const Discord = require('discord.js');
//const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.reply('Pong!');
  if (msg.content === 'everyone') msg.reply('@everyone, salut à tous!', {disableEveryone: false});
  if (msg.content === 'noteveryone') msg.reply('@everyone, salut à tous');
});

client.login('NjMzMzM3MzMwNzQ0NDI2NTE2.XaS3Gw.b9R619ATf48hT4jc4iXL7m3JP5E');