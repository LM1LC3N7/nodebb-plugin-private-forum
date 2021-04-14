const plugin = {};
let winston = module.parent.require('winston');
const helpers = require.main.require('./src/controllers/helpers');

plugin.init = async (params, callback) => {

        const { app, middleware, router } = params;
        let allowedPages = /\/(assets\/|login|register|reset|auth|plugins\/).*|.*(.css|.js)$/;

        router.use(function (req, res, next) {
                if (req.loggedIn || allowedPages.test(req.url)) {
                        winston.verbose("[plugin-nodebb-private-forum] User is logged or URL is allowed ("+ req.url +"), no redirect.");
                        return next();
                }
                winston.verbose("[plugin-nodebb-private-forum] User is not logged and URL is not allowed ("+ req.url +"), redirecting to login page.");
                return helpers.notAllowed(req, res, next);
        });
};

module.exports = plugin;
