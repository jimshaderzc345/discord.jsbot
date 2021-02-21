module.exports = {
  name: 'ping',
  description: "shows the bot/'s ping",
  execute(message, args, embed) {
   message.channel.send('**Ping**').then((msg) => {
    var ping = msg.createdTimestamp - message.createdTimestamp;
    msg.edit("**PONG** The bot's ping is `" + ping + 'ms`.');
   });
  },
 };