var coap    = require('coap');
var server  = coap.createServer();
var route   = require('./route');


server.on('request', function(req, res) {
  route.handle(req.url, req.method, req, res);
});


server.listen(function() {
  console.log('CoAP-server started on Port:', server._port);
});
