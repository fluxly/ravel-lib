var NoisemusickDefs = [
	{
		"name" : "instrument-1",
		"background" : "images/InstrumentImages/NoiseKit-ipad.png",
		"controls" : [
			{ "type" : "POT_CONTROL", "x" : 0, "y" : 0, "w": 40, "h":40,
		      "patch_input": "feedbake_osc1", "patch_input_x": "devnull", "patch_input_y": "devnull"  }
		]
	}
];

var instruments = [];

function FluxamaPot() = {
	
}

function FluxamaTouchPad() = {
	
}

function FluxamaSwitch() = {
	
}

function dromSetup() {
	// Set up controls
	for (i = 0; i < NoisemusickDefs.length; i++) {
		console.log(NoisemusickDefs[i].name);
		let controls = NoisemusickDefs[i]["controls"];
		for (j = 0; j < controls.length; j++) {
			console.log(controls[j]["type"]);
			if (controls[j]["type"] == "POT_CONTROL") {
				
			}
		}
	}

}

/*    int controlType[nControls] = {
        // Instrument 1:
        TOUCH_PAD, TOUCH_PAD, TOUCH_PAD, TOUCH_PAD, POT_CONTROL, POT_CONTROL, SWITCH_CONTROL,
        // Instrument 2:
        TOUCH_PAD, TOUCH_PAD, TOUCH_PAD, TOUCH_PAD, POT_CONTROL, POT_CONTROL, SWITCH_CONTROL,
        // Instrument 3:
        TOUCH_PAD, TOUCH_PAD, TOUCH_PAD, TOUCH_PAD, POT_CONTROL, POT_CONTROL, SWITCH_CONTROL
    };
    float controlValue[nControls] = {
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
    };
    
    float touchValueX[nControls] = {
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
    };
    
    float touchValueY[nControls] = {
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
    };
    
    float controlAngle[nControls] = {
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
    };
    
    float prevControlAngle[nControls] = {
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
    };
    
    float controlX[nControls] = {
        79, 79, 402, 402, 189, 291, 242,  // Instrument 1
        79, 79, 402, 402, 191, 289, 242,  // Instrument 2
        79, 79, 402, 402, 189, 291, 242   // Instrument 3
    };
    float controlY[nControls] = {
        79, 242, 79, 242, 110, 110, 266,
        79, 242, 79, 242, 113, 113, 266,  // Instrument 2
        79, 242, 79, 242, 110, 110, 266   // Instrument 3
    };
    
    float controlW[nControls] = {
        135, 135, 135, 135, 40, 40, 48,  // Instrument 1
        135, 135, 135, 135, 40, 40, 48,  // Instrument 2
        135, 135, 135, 135, 40, 40, 48   // Instrument 3
    };
    
    float controlH[nControls] = {
         135, 135, 135, 135, 40, 40, 34,
         135, 135, 135, 135, 40, 40, 34,
         135, 135, 135, 135, 40, 40, 34
    };
    
    float buttonX[nButtons] = { 103, 272, 441, 179, 363 };
    float buttonY[nButtons] = { 72, 72, 72, 220, 220 };
    float buttonW[nButtons] = { 116, 116, 116, 116, 116 };
    float buttonH[nButtons] = { 116, 116, 116, 116, 116 };
    
    string instrumentImages[nInstruments+2] = {
        "NoiseKit", "NoiseKitOrange", "NoiseKitPink", "AboutLayer", "AboutLayer"
    };
        
    string patchInput[nControls] = {
        "devnull", "devnull", "devnull", "devnull", "feedbake_osc1", "feedbake_osc2", "feedbake_hold",
         "devnull", "devnull", "devnull", "devnull", "feedbake_osc1", "feedbake_osc2", "feedbake_hold",
         "devnull", "devnull", "devnull", "devnull", "feedbake_osc1", "feedbake_osc2", "feedbake_hold"
    };
    string touchInputX[nControls] = {
        "feedbake_1", "feedbake_3", "feedbake_5", "feedbake_7", "devnull", "devnull", "devnull",
        "feedbake_1", "feedbake_3", "feedbake_5", "feedbake_7", "devnull", "devnull", "devnull",
        "feedbake_1", "feedbake_3", "feedbake_5", "feedbake_7", "devnull", "devnull", "devnull"
    };
    string touchInputY[nControls] = {
        "feedbake_2", "feedbake_4", "feedbake_6", "feedbake_8", "devnull", "devnull", "devnull",
       "feedbake_2", "feedbake_4", "feedbake_6", "feedbake_8", "devnull", "devnull", "devnull",
        "feedbake_2", "feedbake_4", "feedbake_6", "feedbake_8", "devnull", "devnull", "devnull"
    };
    
    string onOffInput[nControls] = {
        "pad1OFF", "pad2OFF", "pad3OFF", "pad4OFF", "devnull", "devnull", "devnull",
       "pad1OFF", "pad2OFF", "pad3OFF", "pad4OFF", "devnull", "devnull", "devnull",
        "pad1OFF", "pad2OFF", "pad3OFF", "pad4OFF", "devnull", "devnull", "devnull"
    };
*/