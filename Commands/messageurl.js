module.exports = {
	name: 'url',
	description: 'Sends a link to the message you sent.',
	execute(message) {
		message.channel.send(`${message.url}`);
	},
};

// This command is not that important, just a random fun command.