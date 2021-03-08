module.exports = {
	name: 'merch',
	description: 'Sends link to my IRL Merch Store',
	execute(message) {
		message.channel.send(`https://www.shop.jimrzc.com`);
	},
};
