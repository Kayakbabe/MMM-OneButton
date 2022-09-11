#!/usr/bin/env python3
import sys
from gpiozero import Button
from time import sleep
from signal import pause

# 0 is the script name itself, technically an argument to python
script = sys.argv[0]
# 1 is the command args you passed after the script that aren't switches for python
args = [arg for arg in sys.argv[1:] if not arg.startswith("-")]

Button.was_held = False

def held(btn):
    btn.was_held = True
    print("BUTTON_HELD",end ="")

def released(btn):
    if not btn.was_held:
        pressed(btn)
    btn.was_held = False

def pressed(btn):
    print("BUTTON_PRESSED",end ="")

for btn in args: 
    button = Button(btn,hold_time=4)

button.when_held = held
button.when_released = released
sleep(3)

pause()    














