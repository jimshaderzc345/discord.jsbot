const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Bot is now online!');
	client.user.setActivity("Playing update time");
	// If you want to change what the bot is playing replace the words under client.user.setActivity
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('I ran into a problem while trying to run this command. Please report the issue in the github providing as many details as possible!');
	}
});

client.login(token);

// I do NOT suggest changing the information above unless you are editing the boy activity because if the index.js breaks the bot will not be able to function.
