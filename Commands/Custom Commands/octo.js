module.exports = {
	name: 'octo',
	description: 'Sends the invite link for Octo (a discord bot like this bot but a lot more developed)',
	execute(message) {
		message.channel.send(`https://www.octodiscord.com/invite.html`);
	},
};
