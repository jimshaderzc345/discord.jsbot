module.exports = {
	name: 'support',
	description: 'Displays bot support info.',
	execute(message) {
		message.channel.send(`At this time, we do not offer support for this bot except in the github where members will try to help you resolve the errors in the code.`);
	},
};

// If you would like to change what the bot responds with, you may do so by replacing the text above in the "`"
