module.exports = {
	name: 'purge',
	description: 'Purges up to 99 messages.',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Please provide the amount of messages you want to purge.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to purge messages in this channel!');
		});
	},
};
// There is no way to make it purge more then 99 messages unless you change the code entirely.