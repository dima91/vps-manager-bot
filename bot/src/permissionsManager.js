"use strict";

module.exports	= {

	users : {
		"super-users"	: [],
		"allowed-users"	: []
	},
	commands : {},



	user2PermissionsLevel (username) {
		if (this.users["super-users"].includes (username))
			return 0;
		if (this.users["allowed-users"].includes (username))
			return 1;

		// User is not contained in any list: throwing an error
		throw "Un-allowed user!!";
	},



	checkPermissions (ctx) {
		const currLevel	= this.user2PermissionsLevel (ctx.from.username);
		const reqLevel	= this.commands[ctx.message.text.substr(1)];
		
		if (reqLevel < currLevel) {
			throw "Invalid curret level!\t\tcurrLevel= "+ currLevel + ",  reqLevel= " + reqLevel;
		}
	}
}