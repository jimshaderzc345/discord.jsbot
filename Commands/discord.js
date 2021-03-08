module.exports = {
	name: 'discord',
	description: 'Sends link to my discord server (for sharing) (Custom Command)',
	execute(message) {
		message.channel.send(`https://www.jimrzc.com/discord`);
	},
};
