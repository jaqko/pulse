const Discord = require('discord.js');
const config = require('./config.json');
const { json } = require('express');
const client = new Discord.Client();
client.once('ready', () => {
  console.log(`${client.user.tag} has joined the chat.`);
});
editorSwitch = 1;
class Variable {
	constructor(type, name, sign, value, end) {
		this.varType = type;
		this.varName = name;
		this.varSign = sign;
		this.varValue = value;
		this.varEnd = end;
	}
}
client.on('message', async message => {
	function CheckLine() {
		editorSwitch = 0;
		messageCheck = message.content;
		messageSplit = messageCheck.split(/ +/);
		console.log(messageSplit);
		editorSwitch = 1;
		if (messageSplit.includes("var") && messageSplit.indexOf("var") == 0) {


			if (messageSplit[3].endsWith(";" || ",")) {

				characterend = messageSplit[3].length - 1;
				semicolon = messageSplit[3].slice(messageSplit[3].length - 1, messageSplit[3].length);
				messageSplit[3] = messageSplit[3].slice(0,characterend);

			} else if (messageSplit[3].endsWith("") && !messageSplit[4]) {

				semicolon = "";

			} else if (messageSplit[4] == "stop" || "STOP" || "Stop") {

				semicolon = messageSplit[4];

			}


			const variable = new Variable(varType = messageSplit[0], varName = messageSplit[1], varSign = messageSplit[2], varValue = messageSplit[3], varEnd = semicolon);
			console.log(variable);
			jsonStringed = JSON.stringify(variable);
		}
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