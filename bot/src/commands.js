"use strict";

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
	}
}