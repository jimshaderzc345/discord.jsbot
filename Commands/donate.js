module.exports = {
	name: 'donate',
	description: 'Sends link to my donation page (Custom Command)',
	execute(message) {
		message.channel.send(`https://www.shop.jimrzc.com/donate`);
	},
};
