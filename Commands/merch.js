module.exports = {
	name: 'merch',
	description: 'Sends link to my IRL Merch Store (Custom Command)',
	execute(message) {
		message.channel.send(`https://www.shop.jimrzc.com`);
	},
};
