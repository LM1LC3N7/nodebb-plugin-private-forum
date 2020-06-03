'use strict';

const plugin = {};

// WE NEED A MIDDLEWARE HERE
//
plugin.addMiddleware = function (req, res, next) {
	
	var helpers = require.main.require('./src/routes/helpers');
	
	if ((req.url !== "/login") || (req.url !== "/register")) {
		helpers.notAllowed(app.req, app.res, function(error){
			if (error) return next(err);
		});
	}
	next();
};

module.exports = plugin;
