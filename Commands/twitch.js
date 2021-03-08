module.exports = {
	name: 'twitch',
	description: 'Sends link to my Twitch (Custom Command)',
	execute(message) {
		message.channel.send(`https://www.twitch.tv/jimshaderzc`);
	},
};
