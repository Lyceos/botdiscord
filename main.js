
const { Client } = require("discord.js");
const client = new Client({disableEveryone: true });
// const Discord = require('discord.js');
// const client = new Discord.Client();
// const { TOKEN, PREFIX, KEY } = require("./config");

// const TOKEN = process.env.TOKEN
// const PREFIX = process.env.PREFIX

client.on("ready", () => {
	console.log("Bot ready");
});

client.on("message", msg => {
	if (msg.content.startsWith(`${process.env.PREFIX}ping`)) msg.reply("Pong!");
});

client.login(process.env.TOKEN);

