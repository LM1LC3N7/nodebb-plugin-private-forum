'use strict';

const plugin = {};

// WE NEED A MIDDLEWARE HERE
//
plugin.init = function (app, params, callback) {
	var helpers = require.main.require('./src/routes/helpers');
	var req = app.req;	
	if ((req.url !== "/login") || (req.url !== "/register")) {
		helpers.notAllowed(app.req, app.res, function(error){
			if (error) return next(err);
		});
	}
	callback();
};

module.exports = plugin;
