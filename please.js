// this file intracts with (route.js)

module.exports = {

	dev: "aleksandar.C",
	allPosts: [],
	handleTheGet: function(req, res){

		console.log("GET");
		theResponse = "";
    theResponse += "\n" +this.allPosts.length + " posts\nWith the content: " + this.allPosts;
		return res.end(theResponse);
	},
	handleThePost: function(req, res){

		// push the new post to allPosts[]
		this.allPosts.push(req.payload);
		console.log("POST - Payload: " + req.payload);
		theResponse = "";
	  theResponse += "\n[This was a POST: " + req.payload + "]\n\n" + this.allPosts.length + " posts\nWith the content: " + this.allPosts;
		return res.end(TheResponse);

	},
	handleThePut: function(req, res){

    //deletes last post
		this.allPosts.pop();
		//push in the payload
    this.allPosts.push(req.payload);
    console.log("PUT - Payload: " + req.payload);
    theResponse = "";
    theResponse += "\n[This was a PUT: " + req.payload + "]\n\n" + this.allPosts.length + " posts\nWith the content: " + this.allPosts;
		return res.end(theResponse);
	},
	handleTheDelete: function(req, res){
		
		console.log("DELETE");
		//Deletes last post
		this.allPosts.pop();
		return res.end("Deleted last post, " + this.allPosts.length + " posts remaining\n\nWith the content: " + this.allPosts);
		
	},
	doNot: function(req, res){

		console.log("!routeBlock - " + req.method + " : on", req.url);
		return res.end(theText + "\n\n" + "ALL ROUTES EXCEPT '/' IS BLOCKED");
	}

};
