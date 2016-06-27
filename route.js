// this file interacts with (Please.js)

// route.js is an handle & URL module made by me
// for the coap REQUEST url/routes & methods. 

var please  = require('./please');

module.exports = {

	dev: "aleksandar.C",
	handle: function(url, method, req, res){

		console.log("routeinfo - [ URL: ", url, "METHOD: ", method);

		// URL check First!
		switch(url)
		{
		    case "/": // OK pass to next switch
		          break;

		    case "/req":
		    	  this.showREQ(req, res);
		    	  break;

		    case "/res":
		    	  this.showRES(req, res);
		    	  break;

		  	default:
		  	    return please.doNot(req, res);
		    	  break;
		}
		
		// Handle RESTFUL API (based on req.url)
		switch(method){

		    case "GET":
		      	please.handleTheGet(req, res);
		      	break;

		    case "POST": 
		      	please.handleThePost(req, res);
		      	break;
		      
		    case "PUT":
		    	  please.handleThePut(req, res);
		      	break;

		    case "DELETE":
		      	please.handleTheDelete(req, res);
		      	break;
        
        default: 
		        please.doNot();
		        break;
		}	
	},
	showREQ: function(req, res){
		console.log("/REQ");

		var payload = "[THIS IS COAP REQUEST METHODS]\n\n";
		for(request in req){
			payload += "req." + request + "\n";
		}
		res.end(payload);
	},
	showRES: function(req, res){
		console.log("/RES");

		var payload = "[THIS IS COAP RESPONSE METHODS]\n\n";
		for(response in res){
			payload += "res." + response + "\n";
		}
		res.end(payload);
	}
};
