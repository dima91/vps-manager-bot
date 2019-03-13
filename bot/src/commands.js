"use strict";

const exec					= require('child_process').exec;

module.exports	= {
	utils : null,
	


	onStart	: (ctx) => {
		ctx.reply ('Welcome to vps-manager-bot!')
	},



	onHelp	: (ctx) => {
		ctx.reply ('Bot in development stage..')
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