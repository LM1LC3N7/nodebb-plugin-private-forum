'use strict';

const plugin = {};
var winston = module.parent.require('winston');
const helpers = require.main.require('./src/controllers/helpers');

plugin.init = function (params, callback) {
	
	// TODO
	// ADD A MIDDLEWARE AND GET "req" object

	const { app, middleware, router } = params;
	var allowedPages=["/login", "/register", "/reset"];
	
	console.log("==================================");
	console.log(" Plugin Private Forum Initialized ");
	console.log("==================================");
	
	if (allowedPages.indexOf(req.url) < 0) {
		helpers.notAllowed(req, res, next);
	} else {
		console.log("PLUGIN PRIVATE FORUM: req.url="+req.url+", user is logged");
		winston.log("PLUGIN PRIVATE FORUM: req.url="+req.url+", user is logged");
		next();
	}
};

module.exports = plugin;
