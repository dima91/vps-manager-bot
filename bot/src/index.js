"use strict";

const fs		= require('fs');
const Telegraf	= require('telegraf');

var debugFlag	= false;




// Function to pritn program usage
const printUsage		= () => {
	console.log ("Usage: npm start <token>")
}




// Function to print only if 'debugFlag' variable is true
const debug				= (message) => {
	if (debugFlag)
		console.log (message);
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

	debugFlag		= configuration.debug;

	const botToken	= process.argv[3];
	const bot		= new Telegraf (botToken);

	debug ("Using this token: " + botToken);

	return bot;
}



/* ================================================== */
/* ================================================== */
/* ================================================== */



// Main function
const main	= () => {
	let configuration	= loadCofiguration (process.argv[2]);
	let vpsBot			= setupMe (configuration);

	vpsBot.launch ();

	console.log ("\n\n"+
				 "==================================================\n" +
				 "                   BOT STARTED!\n" +
				 "==================================================\n")
}



main ();