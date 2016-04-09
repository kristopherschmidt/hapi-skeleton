'use strict';

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/counter',
        handler: function (request, reply) {
       	  reply({ counter: 1337 }); 
	}
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package')
};
