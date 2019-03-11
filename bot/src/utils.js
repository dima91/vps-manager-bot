"use strict";

module.exports	= {
	DEBUG			: false,



	// Function to print only if 'debugFlag' variable is true
	debug			: (message) => {
		if (this.DEBUG)
			console.log (message);
	},



	log		: (ctx) => {
		console.log ("=====================" + "\n" +
					 new Date(Date.now()).toLocaleString() + "\n" +
					 "Received message from    " + ctx.from.username + " (chatid: " + ctx.chat.id + ")" + "\n" +
					 "       which has type    " + ctx.updateType + "\n" +
					 "     and this content    " + ctx.message.text +"\n"
		);
	},



	onBotStartup (vpsBot, chats) {
		for (var i in chats) {
			vpsBot.telegram.sendMessage (chats[i], "Bot started!");
		}
	}
}