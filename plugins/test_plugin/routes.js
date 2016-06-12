function counter(request, reply) {
    reply({ counter: 1337 });
}

module.exports = function routes (options) {
    return [
        { method: 'GET', path: '/counter', config: 
            { 
                handler: counter
            }
        } 
    ];
};