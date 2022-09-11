# MMM-OneButton
A MagicMirror module for one button with two actions of your choice depending if it is pressed or held down.

# MMM-PythonPrint

doc for [MMM-PythonPrint](https://github.com/Kayakbabe/MMM-OneButton)

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
			config: {
				pythonName: 'python3',		// name of the python process to execute (could be python or python3 depending on your system)
				buttons_config: '5', 		// gpio pin your button is connected to
				pressed: "PAGE_INCREMENT",
				held: "PAGE_DECREMENT",
				debug: true 				// print debugging messages into the browser console from the node_helper
			}
		},
	```


