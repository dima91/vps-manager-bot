"use strict";

module.exports	= {

	localContext: {
	},



	extendContext (ctx) {
			return {ctx:ctx, localContext:this.localContext}
	}
}