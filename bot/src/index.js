"use strict";

const fs					= require ('fs');
const Telegraf				= require ('telegraf');

const utils					= require ('./utils');
const commands				= require ('./commands');
const permissionsManager	= require ('./permissionsManager');
const localContextManager	= require ('./localContextManager');




// Function to print program usage
const printUsage		= () => {
	console.log ("Usage: npm start <token>")
}




// Function to load configuration file
const loadCofiguration	= (filePath) => {
	let rawdata	= fs.readFileSync (filePath);
	let config	= JSON.parse(rawdata);

	return config;
}




// Function to setup the program
const setupMe			= (configuration) => {
	console.log ("Setting up the bot..");

	if (process.argv.length != 4) {
		printUsage ();
		console.log ("\n==================================================" +
					 "\n==================================================\n");

		process.abort ();
	}

	utils.DEBUG		= configuration.debug;

	const botToken	= process.argv[3];
	const bot		= new Telegraf (botToken);

	permissionsManager.users["super-users"]		= configuration["super-users"];
	permissionsManager.users["allowed-users"]	= configuration["allowed-users"];
	permissionsManager.commands					= configuration["commands"];

	utils.debug ("Using this token: " + botToken);


	// =============================
	// Registering logger middleware
	bot.use ((ctx, next) => {
		utils.log (ctx);
		return next ();
	})


	// =========================================
	// Registering permissionsManager middleware
	bot.use ((ctx, next) => {
		permissionsManager.checkPermissions (ctx);
		return next ();
	})


	// =================================
	// Registering local context manager
	bot.use ((ctx, next) => {
		ctx	= localContextManager.extendContext (ctx);
		return next ();
	})


	// =====================
	// Registering commands
	bot.start		((ctx) => commands.onStart (ctx));
	bot.help		((ctx) => commands.onHelp (ctx));
	bot.settings	((ctx) => commands.onSettings (ctx));

	bot.command		('restart', (ctx) => commands.onRestart (ctx));


	return bot;
}



/* ================================================== */
/* ================================================== */
/* ================================================== */



// Main function
const main	= () => {
	let configuration	= loadCofiguration (process.argv[2]);
	let vpsBot			= setupMe (configuration);

	// Sending notifications to super-users
	utils.onBotStartup (vpsBot, configuration["startup-chat-id"]);

	vpsBot.launch ();

	console.log ("\n\n"+
				 "==================================================\n" +
				 "                   BOT STARTED!\n" +
				 "==================================================\n")
}



main ();