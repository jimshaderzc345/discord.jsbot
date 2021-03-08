module.exports = {
	name: 'version',
	description: 'Displays bot version.',
	execute(message) {
		message.channel.send(`**Current bot version: 3.0**`);
	},
};
