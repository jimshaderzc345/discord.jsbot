module.exports = {
	name: 'whois',
	description: 'Display info about yourself.',
	cooldown: 2,
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};

