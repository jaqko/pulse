const http = require('http');
const fs = require('fs');
const port = 53134;

http.createServer((req, res) => {
	let responseCode = 404;
	let content = '404 Error';

	if (req.url === '/') {
		responseCode = 200;
		content = fs.readFileSync('./index.html');
	}

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

	res.write(content);
	res.end();
})
.listen(port);
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cmdPrefix2 = fs.readdirSync('./precmds2').filter(file => file.endsWith('.js'));
const { prefix1, prefix2, prefix3, prefix4, prefix5, prefix6, prefix7, prefix8, prefix9, token } = require('./config.json');
for (const file of cmdPrefix2) {
	const command2 = require(`./precmds2/${file}`);
	client.commands.set(command2.name, command2);
}

client.once('ready', () => {
  console.log(`${client.user.tag} has joined the chat.`);
});
client.on('message', async message => {
	const args = message.content.slice(prefix2.length).split(/ +/);
	const command2 = args.shift().toLowerCase();
	if (!client.commands.has(command2)) return;

	try {
		client.commands.get(command2).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply("We're sorry, but we are not able to execute that command at this time.");
	}

});
client.login(token);