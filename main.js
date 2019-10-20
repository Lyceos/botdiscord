
const { Client } = require("discord.js");
const client = new Client({disableEveryone: true });
// const Discord = require('discord.js');
// const client = new Discord.Client();
const { TOKEN, PREFIX, KEY } = require("./config");

// const TOKEN = process.env.TOKEN
// const PREFIX = process.env.PREFIX

client.on("ready", () => {
	console.log("Bot ready");
});

client.on("message", msg => {
	if (msg.content.startsWith(`${PREFIX}ping`)) msg.reply("Pong!");
});

client.login(TOKEN);

const GoogleSpreadsheet = require("google-spreadsheet");
const { promisify } = require("util");
const creds = require("./Client_secret.json");
var student;
function printPlayerInfos(student) { // relever les mots dans la colonne Pseudo du joueur
	console.log(`Pseudo_du_joueur: ${student.pseudo}`);
}
async function accessSpreadsheet() {
	// const doc = new GoogleSpreadsheet(process.env.GOOGLE_TOKEN);
	const doc = new GoogleSpreadsheet(KEY);

	await promisify(doc.useServiceAccountAuth)(creds);
	const info = await promisify(doc.getInfo)();

	//     on cherche info dans la feuille 1
	const sheet = info.worksheets[0];

	// on affiche le titre et le nombre de ligne
	// console.log(`Title: ${sheet.tilte}, Rows: ${sheet.rowCount}`);

	const rows = await promisify(sheet.getRows)({
		offset: 1 // a partir ligne 1
		// limit : 30, // nombre de ligne
		// orderby: 'Classe_joué'
	});

    client.on('message', message=>{
        let args = message.content.substring(PREFIX.length).split(" ");
        //le premier mot apres le prefix sera arg 0
        switch(args[0]){
            case 'data':
                rows.forEach(row => {
                    if(row.pseudoid === message.author.id){
                        message.channel.send(`Pseudo_du_joueur: ${row.pseudo}`);
                        message.channel.send(`level: ${row.lvl}`);
                        const a = sheet.rowCount;
                        message.channel.send(a);
                    }
                    else{
                    const a = sheet;
                    }
                })
            break;
        }
    })


}
accessSpreadsheet();
