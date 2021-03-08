module.exports = {
	name: 'website',
	description: 'Sends the link to my website',
	execute(message) {
		message.channel.send(`https://www.jimrzc.com`);
	},
};
