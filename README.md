# MMM-OneButton
A MagicMirror module for one button with two actions of your choice depending if it is pressed or held down. The module will send a MagicMirror notification to the MagicMirror. I use this with the MMM-Pages module to increment the pages. There are two notification available with one button, so you could even use this to toggle or shut down your pi depending on other modules you may have installed on your mirror.

[MMM-OneButton](https://github.com/Kayakbabe/MMM-OneButton)

## Prerequisites

This module was designed for running on a Raspberry Pi running Buster. Buster which has gpiozero and python incorporated. 
If you run this module on a different machine, you may need to add python and gpiozero and perhaps rpi:GPIO as well.
You will have to go to those resource to figure out how to do that.

## Install:

* Clone this modules URL from github
```
git clone https://github.com/Kayakbabe/MMM-OneButton
```

* Edit `config.js` and add a block like this:

	```js
		{
			module:"MMM-OneButton",
			position:"upper_third",
			disabled:false,
			config: {
				pythonName: 'python3',		// name of the python process to execute (could be python or python3 depending on your system)
				buttons_config: '5', //gpio pin your switch or sensor is connected to
				pressed: "PAGE_INCREMENT",
				held: "PAGE_DECREMENT",
				debug: false // print debugging messages into the browser console from the node_helper
			}
		},
	```

## Configuration

pythonname: if you use python or python2 this script may or may not work. You can set whatever name you use to execute python scripts on the command line here. By default the module will use python 3

buttons_config: the gpio pin you have the button connected to

pressed: the notification you want the button to send to MagicMirror when the button is pressed quickly

held: the notification you want the button to send to MagicMirror when the button is held down for a long time approx 4 seconds

debug: true will print debugging messages into the browser console from the node_helper so you don't have to open the logs.

### buttons_config 
Use this reference for how to designate the gpio pin your button is attached to.
https://gpiozero.readthedocs.io/en/stable/recipes.html?highlight=button#pin-numbering

