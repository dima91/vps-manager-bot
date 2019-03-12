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

		exec('reboot', (error, stdout, stderr) => {
			if (error)
				console.error (error);
		});
	}
}