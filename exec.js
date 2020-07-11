const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.once('ready', () => {
  console.log(`${client.user.tag} has joined the chat.`);
});
editorSwitch = 1;
class Variable {
	constructor(name, value, type, line) {
		this.varName = name;
		this.varValue = value;
		this.varType = type;
		this.varLine = line;
	}
}
client.on('message', async message => {
	function CheckLine() {
		editorSwitch = 0;
		messageCheck = message.content;
		messageSplit = messageCheck.split(" ");
		console.log(messageSplit);
		editorSwitch = 1;
	};
	function GoToEditor() {
		while (editorSwitch == 0) {
			CheckLine();
		}
	}
	if (message.content == ("pls.editor")) {
			GoToEditor();
		}
		if (message.content != "pls.run") {
			CheckLine();
		} else if (message.content == "pls.run") {
			PlsRun();
			editorSwitch = 1;
		}
});
client.login(config.token);