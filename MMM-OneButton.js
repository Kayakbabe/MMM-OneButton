/* MagicMirrorÂ²
 * Magic Mirror By Michael Teeuw https://magicmirror.builders
 * MIT Licensed.
 *
 * Module: MMM-OneButton
 *
 * By Kelly  https://github.com/Kayakbabe/MMM-OneButton
 * MIT Licensed.
 */

Module.register("MMM-OneButton", {

	// anything here in defaults will be added to the config data
	// and replaced if the same thing is provided in config
	defaults: {
		command: "onebutton.py",
		pythonName:"python3",
		debug:false,
		pressed: "PAGE_INCREMENT",
		held: "PAGE_DECREMENT",
		buttons_config:5
	},

	init: function(){
		Log.log(this.name + " is in init!");
	},

	start: function(){
		Log.log(this.name + " is starting!");
		Log.log(this.name + " pressed is: " + this.config.pressed);
	},
	
	getStyles: function() {
		return 	[
			'MMM-OneButton.css'
		]
	},
	


	// messages received from other modules and the system (NOT from your node helper)
	// payload is a notification dependent data structure
	notificationReceived: function(notification, payload, sender) {
		// once everybody is loaded up
		if(notification==="ALL_MODULES_STARTED"){
			// send our config to our node_helper
			this.sendSocketNotification("CONFIG",this.config)
		}

	},

	// messages received from from your node helper (NOT other modules or the system)
	// payload is a notification dependent data structure, up to you to design between module and node_helper
	socketNotificationReceived: function(notification, payload) {
		Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		if(notification === "message_from_helper"){
			if(payload === "BUTTON_PRESSED"){
				this.sendNotification(this.config.pressed)
			}
			if(payload === "BUTTON_HELD"){
				this.sendNotification(this.config.held)
			}			
			
			this.config.message = payload;
			
			if(this.config.debug) {
				// tell mirror runtime that our data has changed,
				// we will be called back at GetDom() to provide the updated content
				this.updateDom(1000)
			}
		}
		
	},

	// system notification your module is being hidden
	// typically you would stop doing UI updates (getDom/updateDom) if the module is hidden
	suspend: function(){

	},

	// system notification your module is being unhidden/shown
	// typically you would resume doing UI updates (getDom/updateDom) if the module is shown
	resume: function(){

	},

	// this is the major worker of the module, it provides the displayable content for this module
	getDom: function() {
		var wrapper = document.createElement("div");

		// if user supplied message text in its module config, use it
		if(this.config.hasOwnProperty("message")){
			// using text from module config block in config.js
			wrapper.innerHTML = this.config.message;
			wrapper.className += "OneButton"
		}

		// pass the created content back to MM to add to DOM.
		return wrapper;
	},

})
