"use strict";

const exec					= require('child_process').exec;

module.exports	= {
	utils : null,
	


	onStart	: (ctx) => {
		ctx.reply ('Welcome to vps-manager-bot!')
	},



	onHelp	: (ctx) => {
		ctx.reply ("This bot allow yo to manage a server or, more generally, a computer.\n\n" +
					"Commands which you can call are: \n" +
					"[help] : print this message\n" +
					"[start] : start communication with the bot\n" +
					"[settings] : edit bot settings and parameters\n" + 
					"[restart] : reboot the server\n" +
					"[exec] : execute the bash command following '\exec' string")
	},



	onSettings	: (ctx) => {
		ctx.reply ('Wait a moment..');
	},



	onRestart	: (ctx) => {
		ctx.reply ("Restarting the VPS");

		exec ('reboot', (error, stdout, stderr) => {
			if (error)
				console.error (error);
		});
	},


	
	onExec		: (ctx) => {
		const cmd		= ctx.message.text.substr (6);
		var replyStr	= "";

		console.log ("Executing this command  " + cmd);

		exec (cmd, (error, stdout, stderr) => {
			if (error)
				replyStr	= "=====  Error executing command  =====\n" +
							  "=================================\n" +
							  error;
			else
				replyStr	= "=====  Command output  =====\n" + 
							  "==========================\n" +
							  stdout;

			ctx.reply (replyStr);
		});
	}
}