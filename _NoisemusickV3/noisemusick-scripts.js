var NoisemusickDefs = [
	{
		"name" : "noisemusick-0",
		"patch": "noisemusick1.pd",
		"menuimage" : "images/InstrumentImages/NoiseKitMenu-ipad.png",
		"background" : "images/InstrumentImages/NoiseKit-ipad.png",
		"controls" : [
			{ "type" : "POT_CONTROL", "x" : 278, "y" : 150, "w": 40, "h":40,
		      "patch_input": "feedbake_osc1", "marker": "line" },
			{ "type" : "POT_CONTROL", "x" : 498, "y" : 150, "w": 40, "h":40,
		      "patch_input": "feedbake_osc2", "marker": "line"  },
			{ "type" : "LED_CONTROL", "x" : 427, "y" : 415, "w": 40, "h":40 },
			{ "type" : "SWITCH_CONTROL", "x" : 472, "y" : 570, "w": 40, "h":40,
		      "patch_input": "feedbake_hold"  },
			{ "type" : "TOUCH_PAD", "x" : 30, "y" : 70, "w": 280, "h":280,
		      "patch_input_x": "feedbake_1", "patch_input_y": "feedbake_2"  },
			{ "type" : "TOUCH_PAD", "x" : 30, "y" : 420, "w": 280, "h":280,
		      "patch_input_x": "feedbake_3", "patch_input_y": "feedbake_4"  },
			{ "type" : "TOUCH_PAD", "x" : 720, "y" : 70, "w": 280, "h":280,
		      "patch_input_x": "feedbake_5", "patch_input_y": "feedbake_6"  },
			{ "type" : "TOUCH_PAD", "x" : 720, "y" : 420, "w": 280, "h":280,
			  "patch_input_x": "feedbake_7", "patch_input_y": "feedbake_8"  }
		]
	},
	{
		"name" : "noisemusick-1",
		"patch": "noisemusick2.pd",
		"menuimage" : "images/InstrumentImages/NoiseKitPinkMenu-ipad.png",
		"background" : "images/InstrumentImages/NoiseKitPink-ipad.png",
		"controls" : [
			{ "type" : "POT_CONTROL", "x" : 278, "y" : 150, "w": 40, "h":40,
		      "patch_input": "feedbake_osc1", "marker": "line" },
			{ "type" : "POT_CONTROL", "x" : 498, "y" : 150, "w": 40, "h":40,
		      "patch_input": "feedbake_osc2", "marker": "line"  },
			{ "type" : "LED_CONTROL", "x" : 427, "y" : 415, "w": 40, "h":40 },
			{ "type" : "SWITCH_CONTROL", "x" : 472, "y" : 570, "w": 40, "h":40,
		      "patch_input": "feedbake_hold"  },
			{ "type" : "TOUCH_PAD", "x" : 30, "y" : 70, "w": 280, "h":280,
		      "patch_input_x": "feedbake_1", "patch_input_y": "feedbake_2"  },
			{ "type" : "TOUCH_PAD", "x" : 30, "y" : 420, "w": 280, "h":280,
		      "patch_input_x": "feedbake_3", "patch_input_y": "feedbake_4"  },
			{ "type" : "TOUCH_PAD", "x" : 720, "y" : 70, "w": 280, "h":280,
		      "patch_input_x": "feedbake_5", "patch_input_y": "feedbake_6"  },
			{ "type" : "TOUCH_PAD", "x" : 720, "y" : 420, "w": 280, "h":280,
			  "patch_input_x": "feedbake_7", "patch_input_y": "feedbake_8"  }
		]
	},
	
	{
		"name" : "noisemusick-2",
		"patch": "noisemusick3.pd",
		"menuimage" : "images/InstrumentImages/NoiseKitOrangeMenu-ipad.png",
		"background" : "images/InstrumentImages/NoiseKitOrange-ipad.png",
		"controls" : [
			{ "type" : "POT_CONTROL", "x" : 284, "y" : 161, "w": 40, "h":40,
		      "patch_input": "feedbake_osc1", "marker": "line" },
			{ "type" : "POT_CONTROL", "x" : 490, "y" : 161, "w": 40, "h":40,
		      "patch_input": "feedbake_osc2", "marker": "line"  },
			{ "type" : "LED_CONTROL", "x" : 427, "y" : 415, "w": 40, "h":40 },
			{ "type" : "SWITCH_CONTROL", "x" : 472, "y" : 570, "w": 40, "h":40,
		      "patch_input": "feedbake_hold"  },
			{ "type" : "TOUCH_PAD", "x" : 30, "y" : 70, "w": 280, "h":280,
		      "patch_input_x": "feedbake_1", "patch_input_y": "feedbake_2"  },
			{ "type" : "TOUCH_PAD", "x" : 30, "y" : 420, "w": 280, "h":280,
		      "patch_input_x": "feedbake_3", "patch_input_y": "feedbake_4"  },
			{ "type" : "TOUCH_PAD", "x" : 720, "y" : 70, "w": 280, "h":280,
		      "patch_input_x": "feedbake_5", "patch_input_y": "feedbake_6"  },
			{ "type" : "TOUCH_PAD", "x" : 720, "y" : 420, "w": 280, "h":280,
			  "patch_input_x": "feedbake_7", "patch_input_y": "feedbake_8"  }
		]
	}
];

var controls = [];
var instruments = [];
var menuItems = [];
var menuScene = true; 
var blink;
const ledIndex = 2;   // only one led for now FIXME

function FluxamaPot(_instrument, _id, _x, _y, _w, _h, _patchInput, _angle, _marker){
    this.instrument = _instrument;
	this.id = _id;
	this.ref = _instrument + "-" + _id,
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.patchInput = _patchInput;
	this.angle = _angle;
	this.marker = _marker;
	
	this.getWidgetCode = function() {
		let knobMarker = "images/ControlImages/knobLine-ipad.png";
		if (this.marker == 'dot') {
			knobMarker = "images/ControlImages/KnobDot-ipad.png";
		}
		return `<div class="control pot pot-` + this.ref  + `" id="pot-` + this.ref + `">
			<a onclick="window.controls[` + this.id + `].controlTouched()">
		    <div style="z-index:1000;" class="pot-touch-point" id="pot-touch-point-` + this.ref + `"></div>
		    </a>
			<img class="control-img knobline" id="pot-` + this.ref  + `-knobline" src="` + knobMarker + `">
			<img class="control-img ring" id="pot-` + this.ref + `-ring" src="images/ControlImages/RingWhite-ipad.png">	
		</div>
		`;
	}
	this.placeControl = function() {
		document.getElementById("pot-" + this.ref).style["position"] = "absolute";
		document.getElementById("pot-" + this.ref).style["top"] = this.y + "px";
		document.getElementById("pot-" + this.ref).style["left"] = this.x + "px";
		document.getElementById("pot-" + this.ref).style["display"] = "block";
	}
	this.controlTouched = function() {
		console.log("Touched " + this.ref);
	}
	this.updateControl = function() {
		console.log("Update " + this.ref);
	}
}

function FluxamaTouchPad(_instrument, _id, _x, _y, _w, _h, _patchInputX, _patchInputY){
    this.instrument = _instrument;
	this.id = _id;
	this.ref = _instrument + "-" + _id,
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.patchInputX = _patchInputX;
	this.patchInputY = _patchInputY;
	
	this.getWidgetCode = function() {
		return `<a onclick="window.controls[` + this.id + `].controlTouched()">
		<div class="control touch-point touch-` + this.ref +`" id="touch-` + this.ref + `"></div>
		</a>
		`;
	}
	this.placeControl = function() {
		document.getElementById("touch-" + this.ref).style["position"] = "absolute";
		document.getElementById("touch-" + this.ref).style["top"] = this.y + "px";
		document.getElementById("touch-" + this.ref).style["left"] = this.x + "px";
		document.getElementById("touch-" + this.ref).style["width"] = this.w + "px";
		document.getElementById("touch-" + this.ref).style["height"] = this.h + "px";
		document.getElementById("touch-" + this.ref).style["display"] = "block";
	}
	this.controlTouched = function() {
		console.log("Touched " + this.ref + " " + MouseEvent.clientX + " " + MouseEvent.clientY);
	}
	this.updateControl = function() {
		console.log("Update " + this.ref);
	}
}

function FluxamaSwitch(_instrument, _id, _x, _y, _w, _h, _patchInput, _state){
    this.instrument = _instrument;
	this.id = _id;
	this.ref = _instrument + "-" + _id,
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.patchInput = _patchInput;
	this.state = _state;
	
	this.getWidgetCode = function() {
		return `
		<a onclick="window.controls[` + this.id + `].controlTouched()">
		<div class="control switch switch-` + this.ref  + `" id="switch-` + this.ref  + `">
			<img class="control-img switch-img" style="position:absolute; top:0px; left:0px;" id="switch-` + this.ref  + `-off" src="images/ControlImages/twoPosSwitch0-ipad.png">
			<img class="control-img switch-img" style="position:absolute; top:0px; left:0px;"  id="switch-` + this.ref  + `-on" src="images/ControlImages/twoPosSwitch1-ipad.png">
		</div>
		</a>
		`;
	}
	this.placeControl = function() {
		document.getElementById("switch-" + this.ref).style["position"] = "absolute";
		document.getElementById("switch-" + this.ref).style["top"] = this.y + "px";
		document.getElementById("switch-" + this.ref).style["left"] = this.x + "px";
		document.getElementById("switch-" + this.ref).style["display"] = "block";
        this.setState();
	}
	this.setState = function() {
		if (this.state) {
			document.getElementById("switch-" + this.ref + "-on").style["display"] = "block";
			document.getElementById("switch-" + this.ref + "-off").style["display"] = "none";
		} else {
			document.getElementById("switch-" + this.ref + "-on").style["display"] = "none";
			document.getElementById("switch-" + this.ref + "-off").style["display"] = "block";
		}
	}
	this.controlTouched = function() {
		console.log("Touched " + this.ref);
	}
	this.updateControl = function() {
		console.log("Update " + this.ref);
	}
}

function FluxamaLed(_instrument, _id, _x, _y, _w, _h, _speed, _state){
    this.instrument = _instrument;
	this.id = _id;
	this.ref = _instrument + "-" + _id,
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.speed = _speed;
	this.blink = null;
	this.state = _state;
	
	this.getWidgetCode = function() {
		return `
		<div id="led-` + this.ref + `"><img src="images/InstrumentImages/NoiseKitLedLit-ipad.png"></div>
		`;
	}
	this.placeControl = function() {
		document.getElementById("led-" + this.ref).style["position"] = "absolute";
		document.getElementById("led-" + this.ref).style["top"] = this.y + "px";
		document.getElementById("led-" + this.ref).style["left"] = this.x + "px";
		document.getElementById("led-" + this.ref).style["display"] = "block";
	}

	this.updateControl = function() {
		console.log("Update " + this.ref);
	}
}

function noisemusickSetup() {

	// Set up controls list
	for (i = 0; i < NoisemusickDefs.length; i++) {
		console.log(NoisemusickDefs[i].name);
		instruments.push({ "name": NoisemusickDefs[i]["name"], 
		                   "patch": NoisemusickDefs[i]["patch"],
		                   "menuimage": NoisemusickDefs[i]["menuimage"],
		                   "background": NoisemusickDefs[i]["background"] });
		let c = NoisemusickDefs[i]["controls"];
		for (j = 0; j < c.length; j++) {
			console.log(c[j]["type"]);
			
			if (c[j]["type"] == "POT_CONTROL") {
				controls.push(new FluxamaPot(i, j, c[j]["x"], c[j]["y"], c[j]["w"], c[j]["h"], c[j]["patch_input"], 0, c[j]["marker"]));
			}
			
			if (c[j]["type"] == "TOUCH_PAD") {
				controls.push(new FluxamaTouchPad(i, j, c[j]["x"], c[j]["y"], c[j]["w"], c[j]["h"], c[j]["patch_input_x"], c[j]["patch_input_y"]));
			}
			
			if (c[j]["type"] == "SWITCH_CONTROL") {
				controls.push(new FluxamaSwitch(i, j, c[j]["x"], c[j]["y"], c[j]["w"], c[j]["h"], c[j]["patch_input"], false));
			}
			
			if (c[j]["type"] == "LED_CONTROL") {
				controls.push(new FluxamaLed(i, j, c[j]["x"], c[j]["y"], c[j]["w"], c[j]["h"], 500, false));
			}
		}
	}
	
	for (i=0; i < instruments.length; i++) {
	    // Create menu items	
        document.getElementById("menu-section").innerHTML += `
	        <div  class="menu-item-wrapper" id="menu-item-wrapper-` + i + `">
			   <a  onclick="openInstrument(`+ i +`)">
		         <img  class="menu-item-image" id="menu-item-image-` + i + `" src="` + instruments[i]["menuimage"] + `">
		       </a>
	        </div>
		`;
	}
	
    document.getElementById("menu-section").innerHTML += `
        <a name="about" class="menu-item-wrapper" id="menu-item-wrapper-` + instruments.length + `">
		        <img class="menu-item-image" id="menu-item-image-` + instruments.length + `" src="images/InstrumentImages/AboutLayer-ipad.png">
        </a>
    `;
	
	for (i=0; i < instruments.length; i++) {
	    // Create instrument wrappers	

        document.getElementById("instrument-section").innerHTML += `
	        <div class="instrument-wrapper" id="instrument-wrapper-` + i + `">
		        <a class="exit-button" onclick="exitToMenu()"><img class="exit-button-img" src="images/ControlImages/navMenuExit-ipad-hd.png"/></a>
		        <div class="instrument-background" id="instrument-background-` + i +`">
			        <img class="instrument-background-img" src="` + instruments[i]["background"] + `">
		        </div>
	            <div id="instrument-` + i + `-controls"></div>
	        </div>
		`
	}
	
	console.log(controls.length);
	for (i=0; i < controls.length; i++) {
	    // Add controls to UI
		console.log("instrument-" + controls[i].instrument + "-controls");
		document.getElementById("instrument-" + controls[i].instrument + "-controls").innerHTML += controls[i].getWidgetCode();
		controls[i].placeControl();
	}

    setBlink(controls[ledIndex].speed);
	
	// Handlers
	window.onpointerdown = handleTouchDown;
	window.onpointermove = handleTouchMoved;
	window.onpointerup = handleTouchUp;
	//document.getElementById("instrument-wrapper-0").style["display"] = "block";
}

function openInstrument(n) {
	document.getElementById("menu-section").style["display"] = "none";
    document.getElementById("instrument-wrapper-" + n).style["display"] = "block";
}

function exitToMenu() {
	for (i=0; i < instruments.length; i++) {
		document.getElementById("instrument-wrapper-" + i).style["display"] = "none";
	}
	document.getElementById("menu-section").style["display"] = "block";
}

function setBlink(n) {
	blink = setInterval(function(){ 
		if (controls[ledIndex].state) {
			document.getElementById("led-" + controls[ledIndex].ref).style["display"] = "none";
			controls[ledIndex].state = false;
		} else {
			document.getElementById("led-" + controls[ledIndex].ref).style["display"] = "block";
			controls[ledIndex].state = true;
		}
	 }, n);
}

function handleTouchDown(e) {
	console.log("Touch down! " + e);
	/*
    // ofLog(OF_LOG_VERBOSE, "touch %d down at (%i,%i)", touch.id, (int)touch.x, (int)touch.y);
     if ((scene == 0) && (state == 5) && (buttonHit == -1)) {
         buttonHit = checkButtons((int)touch.x, (int)touch.y);
         if (buttonHit >= 0) { startTouchId = touch.id; }
     }
    
     // MENU SCENE: Touched and not already moving: save touch down location and id
     if ((scene == 0) && (state > 0) && (buttonHit == -1)) {
         prevState = state;
         state = -1;  // wait for move state
         startBackgroundX = backgroundX;
         startTouchId = touch.id;
         startTouchX = (int)touch.x;
         startTouchY = (int)touch.y;
     }
    
     // INSTRUMENT SCENE: Check to see if exit button touched
     if ((scene > 0) && inBoundsExit((int)touch.x, (int)touch.y)) {
         startTouchId = touch.id;
         exitHit = YES;
         ofLog(OF_LOG_VERBOSE, "exitHit");
     }
    
     // INSTRUMENT SCENE: Check to see if controls are touched
     if (scene > 0) {
       for (int i=0; i < nControlsPerInstrument; i++) {
         if (inBounds(instrumentBase+i, touch.x, touch.y)) {
             touchX[touch.id] = touch.x;
             touchY[touch.id] = touch.y;
             touchControl[touch.id] = instrumentBase+i;
             showHighlight[touchControl[touch.id]] = YES;
           //  ofLog(OF_LOG_VERBOSE, "touched control %i", i);
            
             switch (controlType[instrumentBase+i]) {
                 case POT_CONTROL:
                   if (calculatePotAngle(touch.id)) {
                       controlChanged[touchControl[touch.id]] = YES;
                   }
                 break;
                 case TOUCH_PAD:
                     if (calculateTouchAngle(touch.id)) {
                         controlChanged[touchControl[touch.id]] = YES;
                     }
                     break;
                 case SWITCH_CONTROL:
                     break;
             }
           }
        }
     }
	*/
}

function handleTouchMoved(e){
	console.log("Touch moved! " + e.clientX + ", " + e.clientY);
	/*
   // ofLog(OF_LOG_VERBOSE, "touch %d move at (%i,%i)", touch.id, (int)touch.x, (int)touch.y);
    
    // MENU SCENE: no longer in same place as touch down
    // added a bit to the bounds to account for higher res digitizers
    if ((scene == 0) && (state == -1) && (startTouchId == touch.id) && (buttonHit == -1)) {
        ofLog(OF_LOG_VERBOSE, ".");
        if ((touch.x < (startTouchX -touchMargin*2)) || (touch.x > (startTouchX + touchMargin*2))) {
            state = 0;
        }
    }
    // MENU SCENE: Moving with finger down: slide menu left and right
    if ((scene == 0) && (state == 0)  && (startTouchId == touch.id)  && (buttonHit == -1)) {
        backgroundX = startBackgroundX + ((int)touch.x - startTouchX);
    }
    
    // INSTRUMENT SCENE: Check controls
    if (scene > 0) {
        if (touchControl[touch.id] >=0){
            touchX[touch.id] = touch.x;
            touchY[touch.id] = touch.y;
           // ofLog(OF_LOG_VERBOSE, "tracking control %i", touchControl[touch.id]);
            
            switch (controlType[touchControl[touch.id]]) {
                case POT_CONTROL:
                    // Pots will always update unless pinned
                    if (calculatePotAngle(touch.id)) {
                        controlChanged[touchControl[touch.id]] = YES;
                    }
                    break;
                case TOUCH_PAD:
                    // touch pads only update when in bounds
                    if (inBounds(touchControl[touch.id], touch.x, touch.y)) {
                        if (calculateTouchAngle(touch.id)) {
                            controlChanged[touchControl[touch.id]] = YES;
                        }
                    } else {
                      //  ofLog(OF_LOG_VERBOSE, "Sent off to %i", touchControl[touch.id]);
                        pd.sendFloat(onOffInput[touchControl[touch.id]], 0);
                    }
                    break;
                case SWITCH_CONTROL:
                    break;
            }
        }
    }*/
}

function handleTouchUp(e){
	console.log("Touch up! " + e.clientX + ", " + e.clientY);
	/*
   // ofLog(OF_LOG_VERBOSE, "touch %d up at (%i,%i)", touch.id, (int)touch.x, (int)touch.y);
    
    // MENU SCENE: Touched but not moved: load instrument
    if ((scene == 0) && (state == -1) && (startTouchId == touch.id)  && (buttonHit == -1)) {
        ofLog(OF_LOG_VERBOSE, "state? %i", prevState);
        // Also check if in image bounds before switching
        state = prevState;
        startTouchId = -1;
        startTouchX = 0;
        startTouchY = 0;
        if (prevState<5) {
          scene = prevState;
          loadInstrument(scene);
          ofLog(OF_LOG_VERBOSE, "Load Instrument (%i)", prevState);
        }
    }
    // MENU SCENE: Touch up after moving
    if ((scene == 0) && (state == 0) && (startTouchId == touch.id)  && (buttonHit == -1)) {
        
        // If moved sufficiently, switch to next or previous state
        if (((int)touch.x < startTouchX-75) && (prevState < 5)) {
          state = prevState + 1;
          prevState = state;
        } else {
          if (((int)touch.x > startTouchX+75) && (prevState > 1)) {
            state = prevState -1;
            prevState = state;
          } else {
              state = prevState;
          }
        }
        menuMoveStep = abs(backgroundX - backgroundXCenter[state])/8;
        startBackgroundX = backgroundX;
        startTouchId = -1;
        startTouchX = 0;
        startTouchY = 0;
     //   ofLog(OF_LOG_VERBOSE, "New State: %i", state);
    }
    
    if ((scene == 0) && (state == 5) && (buttonHit >= 0) && (startTouchId == touch.id)) {
        int b = checkButtons((int)touch.x, (int)touch.y);
        if (b == buttonHit) {
            switch (b) {
                case 0:
                    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"http://www.fluxama.com"]];
                    break;
                case 1:
                    [[UIApplication sharedApplication]
                         openURL:[NSURL URLWithString:@"itms-apps://itunes.apple.com/us/app/noisemusick/id513770094?mt=8"]];
                    break;
                case 2:
                    [[UIApplication sharedApplication]
                    openURL:[NSURL URLWithString:@"itms-apps://itunes.apple.com/us/apps/dr-om/id555409573?mt=8"]];
                    break;
                case 3:
                    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"https://www.facebook.com/fluxamacorp"]];
                    break;
                case 4:
                    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"https://www.twitter.com/fluxama"]];
                    break;
            }
        }
        buttonHit = -1;
        startTouchId = -1;
    }
    
    // INSTRUMENT SCENE: Touch up after touching in exit button
    if ((scene > 0) && inBoundsExit((int)touch.x, (int)touch.y)
          && exitHit && (touch.id == startTouchId)) {
        startTouchId = -1;
        exitHit = NO;
        loadMenu();
    }
    
    // INSTRUMENT SCENE: Check controls
    if (scene > 0) {
        switch (controlType[touchControl[touch.id]]) {
            case TOUCH_PAD:
                ofLog(OF_LOG_VERBOSE, "Sent off to %i", touchControl[touch.id]);
                pd.sendFloat(onOffInput[touchControl[touch.id]], 0);
                break;
            case SWITCH_CONTROL:
                if (controlValue[touchControl[touch.id]] == 0) {
                    controlValue[touchControl[touch.id]] = 1;
                } else {
                    controlValue[touchControl[touch.id]] = 0;
                }
                holdState = controlValue[touchControl[touch.id]];
                ofLog(OF_LOG_VERBOSE, "Toggle Hold %f", controlValue[touchControl[touch.id]]);
                // toggle switch
                ofLog(OF_LOG_VERBOSE, "send " + ofToString(controlValue[touchControl[touch.id]]) + " to control " + patchInput[touchControl[touch.id]]);
                pd.sendFloat(patchInput[touchControl[touch.id]], controlValue[touchControl[touch.id]]);
                break;
        }
        touchX[touch.id] = 0;
        touchY[touch.id] = 0;
        pinnedHigh[touchControl[touch.id]] = NO;
        pinnedLow[touchControl[touch.id]] = NO;
        ofLog(OF_LOG_VERBOSE, "stopped tracking control %i", touchControl[touch.id]);
        showHighlight[touchControl[touch.id]] = NO;
        controlChanged[touchControl[touch.id]] = NO;
        touchControl[touch.id] = -1;
    }*/
}

/*
    string onOffInput[nControls] = {
        "pad1OFF", "pad2OFF", "pad3OFF", "pad4OFF", "devnull", "devnull", "devnull",
       "pad1OFF", "pad2OFF", "pad3OFF", "pad4OFF", "devnull", "devnull", "devnull",
        "pad1OFF", "pad2OFF", "pad3OFF", "pad4OFF", "devnull", "devnull", "devnull"
    };
*/