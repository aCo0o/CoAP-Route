# CoAP-Route
NodeJS CoAP Request (Route & Method) Handler


    ("coap-route") Is an nodeJS extention to mcollina's node-coap
    
    // Build by us to provide an easy way to handle Requested Routes & Methods
    
    
    
* route.js - Handles Request URL & Methods
* please.js - Executes an CoAP response
 
==============
 
 
CoAP-Route Handle Example Server:
```javascript
        var coap    = require('coap');
        var server  = coap.createServer();
        var route   = require('./route');
        
        
        server.on('request', function(req, res) {
          route.handle(req.url, req.method, req, res);
        });
        
        
        server.listen(function() {
          console.log('CoAP-server started on Port:', server._port);
        });
```
        
        
        
        
===============

# Adding custom routes
* To handle your own routes just add a new case in the route.js (URL switch)

```javascript
        case "/exampleRoute":
            res.end("This is an example of an custom CoAP route");
            break;
```
