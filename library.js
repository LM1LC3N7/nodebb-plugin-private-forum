const plugin = {};
let winston = module.parent.require('winston');
const helpers = require.main.require('./src/controllers/helpers');

plugin.privateforum = async (data, callback) => {
      
        var req = data.req;
        var res = data.res;
        let allowedPages = /\/(assets\/|login|logout|register|reset|auth|plugins\/).*|.*(.css|.js)$/;

        if (req.loggedIn || allowedPages.test(req.url)) {
                winston.verbose("[plugin-nodebb-private-forum] User is logged or URL is allowed ("+ req.url +"), no redirect.");
        } else {
                winston.verbose("[plugin-nodebb-private-forum] User is not logged and URL is not allowed ("+ req.url +"), redirecting to login page.");
                helpers.notAllowed(req, res);
        }
};

module.exports = plugin;
