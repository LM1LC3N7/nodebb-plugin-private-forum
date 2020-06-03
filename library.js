'use strict';

const plugin = {};
var winston = module.parent.require('winston');
const helpers = require.main.require('./src/controllers/helpers');

plugin.init = function (params, callback) {
	
	// TODO
	// ADD A MIDDLEWARE AND GET "req" object

	const { app, middleware, router } = params;
	// var allowedPages=["/login", "/register", "/reset"];
	let allowedPages = /\/(assets\/.*|login|register|reset|plugins\/.*)/;


	console.log("==================================");
	console.log(" Plugin Private Forum Initialized ");
	console.log("==================================");

	app.use(function (req, res, next) {
		// if ((allowedPages.indexOf(req.url) > 0) || (assetsPages.test(req.url)) || (req.uid === 0)) {
		if ((allowedPages.test(req.url)) || (req.url === "/") || (req.uid !== 0)) {
			winston.verbose("[plugin-nodebb-private-forum] User is logged or URL is allowed ("+ req.url +"), no redirect.");
			next();
		} else {
			winston.verbose("[plugin-nodebb-private-forum] User is not logged and URL is not allowed ("+ req.url +"), redirecting to login page.");
			helpers.notAllowed(req, res, next);
		}
	});
	callback();
};

module.exports = plugin;
