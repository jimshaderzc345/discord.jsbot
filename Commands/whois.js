module.exports = {
	name: 'whois',
	description: 'Display info about yourself.',
	cooldown: 2,
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};

//the "w" command does the same thing as this command, this makes things a lot more simple. If I were to make it an ally instead, things would get a lot more complicated. 

