'use strict';

const plugin = {};

plugin.init = function (app, params, callback) {
	var helpers = require.main.require('./src/routes/helpers');
	
	if ((req.url !== "/login") || (req.url !== "/register")) {
		helpers.notAllowed(app.req, app.res, function(error){
			// TODO
			if (error) return next(err);
		});
	}
	callback();
});
};

module.exports = plugin;
