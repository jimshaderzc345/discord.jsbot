module.exports = {
	name: 'donate',
	description: 'Sends link to my donation page',
	execute(message) {
		message.channel.send(`https://www.shop.jimrzc.com/donate`);
	},
};
