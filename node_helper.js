var NodeHelper = require("node_helper");
const { spawn } = require('child_process');
const path=require('path')
// add require of other javascript components here
// var xxx = require('yyy') here
module.exports = NodeHelper.create({
	
	launchit(){

		let handler
		if(this.config.debug) console.log("OneButton spawning "+this.config.command+" using "+this.config.pythonName)

		handler = spawn(this.config.pythonName, ['-u', this.config.command,this.config.buttons_config]);
		handler.stdout.on('data', (data) => {
			if(this.config.debug) console.log("OneButton sending program output="+data)

			this.sendSocketNotification("message_from_helper", data.toString())
		})
		handler.stderr.on('data', (data)=>{
			if(this.config.debug) console.log("OneButton program error="+data)
		})
		handler.on('error', (error)=>{
			if(this.config.debug) console.log("OneButton spawn error="+data)
		})
	},
	
	startit(){

		if(this.config.command.startsWith(this.config.pythonName)) //if the name is not starting with a slash aka is a local file in the same folder
			this.config.command=this.config.command.slice(this.config.pythonName.length)
		this.config.command=__dirname+path.sep+this.config.command
		this.launchit()

	},


	// handle messages from our module// each notification indicates a different messages
	// payload is a data structure that is different per message.. up to you to design this
	socketNotificationReceived(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config=payload
			// send a message back to module
			this.startit()
		}

	},

});
