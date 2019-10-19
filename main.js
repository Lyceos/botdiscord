const { Client } = require('discord.js');
const client = new Client({disableEveryone: true});
const { TOKEN, PREFIX} = require('./config');


//const Discord = require('discord.js');
//const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot ready');
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.reply('Pong!');
});

client.login(TOKEN);
