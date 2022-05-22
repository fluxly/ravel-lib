var RavelController = {
	
	controlList : [],
	controlAreas : [],
	activeTouches : {},
	setupControls : function(json) {
		RavelController.controlList = [];
		
		for (let i = 0; i < json.length; i++) {
			switch(json[i]["type"]) {
				case "pot-control" :
					RavelController.controlList.push(new RavelPot(json[i]));
					RavelController.controlList[i].addControlToPage();
					break;
				case "touch-control" :
					RavelController.controlList.push(new RavelTouch(json[i]));
					RavelController.controlList[i].addControlToPage();
					break;
				case "slider-control" :
					RavelController.controlList.push(new RavelSlider(json[i]));
					RavelController.controlList[i].addControlToPage();
					break;
				case "switch-control" :
					RavelController.controlList.push(new RavelSwitch(json[i]));
					RavelController.controlList[i].addControlToPage();
					break;
				case "led-control" :
					RavelController.controlList.push(new RavelLed(json[i]));
					RavelController.controlList[i].addControlToPage();
					break;
			}
		}
		window.onpointerdown = RavelController.handleTouchDown;
		window.onpointermove = RavelController.handleTouchMoved;
		window.onpointerup = RavelController.handleTouchUp;
	},
	
	handleTouchDown : function(e) {
		e.preventDefault();
	  	//console.log(e);
		//console.log("Touch down! " + e + " at " + e.clientX + ", " + e.clientY);
		for (let i = 0; i < RavelController.controlList.length; i++) {
			if (RavelController.controlList[i].inBounds(e.clientX, e.clientY)) {
				RavelController.activeTouches[e.pointerId] = RavelController.controlList[i];
  				RavelController.controlList[i].touchDown(e);
				
			}
		}
	  
	},
    
	handleTouchMoved : function(e){
		e.preventDefault();
		//console.log(e);
		//console.log("Touch moved! " + e + " at " + e.clientX + ", " + e.clientY);
		if (RavelController.activeTouches.hasOwnProperty(e.pointerId)) {
			if (RavelController.activeTouches[e.pointerId] != null) {
				RavelController.activeTouches[e.pointerId].touchMoved(e);
			}
		}
	},

	handleTouchUp : function(e){
		e.preventDefault();
		console.log(e);
		console.log("Touch up! " + e + " at " + e.clientX + ", " + e.clientY);
		if (RavelController.activeTouches[e.pointerId] != null) {
			RavelController.activeTouches[e.pointerId].touchUp(e);
		}
		RavelController.activeTouches[e.pointerId] = null;
	},
	
}

function RavelPot(json) {
	this.value = 0;
	this.area = json["area"];
    this.parentId = json["parent-id"];
	this.id = json["id"];
	this.subtype = json["subtype"];  // 0 = line, 1 = dot
	this.ref = this.parentId + "-" + this.id,
	this.x = json["x"];  // center x
	this.y = json["y"];  // center y
	this.w = json["w"];
	this.h = json["h"];
	this.showTop = json["show-top"];
	this.showMarker = json["show-marker"];
	this.touchW = json["touch-w"];
	this.touchH = json["touch-h"];
	this.interfaces = json["interfaces"];  // list of input, output
	this.interfacePatchNames = json["interface-patch-names"];  // corresponds to interfaces
	this.angle = json["angle"];
	this.position = json["position"];   // absolute to position, none to let css control placement
	
	this.getWidgetCode = function() {
		let knobMarker = "ravel/control-images/pot/pot-" + this.subtype + "/knob-marker.png";
		let knobRing = "ravel/control-images/pot/pot-" + this.subtype + "/knob-ring.png";
		let knobTop = "ravel/control-images/pot/pot-" + this.subtype + "/knob-top.png";
		return `<div class="pot-wrapper" id="pot-` + this.ref + `-wrapper">
		<div class="control pot pot-` + this.ref  + `" id="pot-` + this.ref + `">
			<img class="control-img pot-` + this.subtype + `-ring" id="pot-` + this.ref + `-ring" src="` + knobRing + `">	
			<img class="control-img pot-` + this.subtype + `-top" id="pot-` + this.ref  + `-top" src="` + knobTop + `">
			<img class="control-img pot-` + this.subtype + `-marker" id="pot-` + this.ref  + `-marker" src="` + knobMarker + `">
			<div style="z-index:1000;" class="touch-point" id="pot-touch-point-` + this.ref + `"></div>
		</div>
		</div>
		`
		;
	}
	this.addControlToPage = function() {
		console.log(this.area);
		document.getElementById(this.area).innerHTML += this.getWidgetCode();
		
		let wrapper = document.getElementById("pot-" + this.ref + "-wrapper");
		let pot = document.getElementById("pot-" + this.ref);
		let touchPoint = document.getElementById("pot-touch-point-" + this.ref);
		let potTop = document.getElementById("pot-" + this.ref + "-top");
		let potMarker = document.getElementById("pot-" + this.ref + "-marker");
		
		if (position = "absolute") {
			wrapper.style["position"] = "absolute";
			wrapper.style["top"] = this.y + "px";
			wrapper.style["left"] = this.x + "px";
			wrapper.style["display"] = "block";
		}
		
		// fudge factor is a hack to correct for existing images
		let fudgeX = -8;
		let fudgeY = -7;
		
		pot.style["width"] = this.w;
		pot.style["height"] = this.h;
		
		touchPoint.style["width"] = this.touchW;
		touchPoint.style["height"] = this.touchH;
		touchPoint.style["top"] = this.touchH + fudgeY;
		touchPoint.style["left"] = this.touchW + fudgeX;
		//touchPoint.onclick = this.touchDown;
		
		potTop.style["width"] = this.touchW;
		potTop.style["height"] = this.touchH;
		potTop.style["top"] = this.touchH  + fudgeY;
		potTop.style["left"] = this.touchW + fudgeX;
		// Need to keep this in the DOM for layout to work
		if (this.showTop == "false") potTop.style["visibility"] = "hidden";
		
		potMarker.style["width"] = this.touchW;
		potMarker.style["height"] = this.touchH;
		potMarker.style["top"] = this.touchH  + fudgeY;
		potMarker.style["left"] = this.touchW + fudgeX;
		if (this.showMarker == "false") potMarker.style["visibility"] = "hidden";
		
		pot.style["transform"] = "rotate(" + this.angle + "deg)";
		
	}
	this.touchDown = function(e) {
		console.log("******DOWN on " + this.ref);
		document.getElementById("pot-" + this.ref + "-ring").style["visibility"] = "visible";
	}
	this.touchMoved = function(e) {
		console.log("******MOVED to " + e.clientX + "  " + e.clientY);
		this.angle = (this.angle + 1) % 360;
		this.calculatePotAngle(e.clientX, e.clientY);
		
	}
	this.touchUp = function(e) {
		console.log("******UP on " + this.ref);
		document.getElementById("pot-" + this.ref + "-ring").style["visibility"] = "hidden";
	}
	
	this.calculatePotAngle = function(x, y) {
		let d1 = y - this.y;
		let d2 = x - this.x;
		let r = Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
		let a = -Math.asin(d1 / r);
        if (x > this.x)  {
            a = 3.14 - a;
        }
        if ((x < this.x) && (y > this.y))  {
            a = 6.28 + a;
        }
		console.log("Angle " + (a * 57.296));
		this.angle = (a * 57.296);
		document.getElementById("pot-" + this.ref).style["transform"] = "rotate(" + this.angle + "deg)";
	}
	
	this.inBounds = function(x1, y1) {
		if ((x1 < (this.x + this.w/2)) && (x1 > (this.x - this.w/2)) &&
			(y1 < (this.y + this.h/2)) && (y1 > (this.y - this.h/2))) {
				console.log("inBounds!");
			return true;
		} else {
			return false;
		}
	}
	
	/*Boolean ofApp::calculatePotAngle(int id) {
	    float d1 = touchY[id]-controlY[touchControl[id]];
	    float d2 = touchX[id]-controlX[touchControl[id]];
	    ofLog(OF_LOG_VERBOSE, "d1, d2: %f, %f", d1, d2);
	    float r = sqrt(pow(d1,2) + pow(d2,2));
	    float angle=0;

	    if (r>0) {
	        angle = -asin(d1/r);
	        ofLog(OF_LOG_VERBOSE, "angle: %f", angle);
	        if (touchX[id] > controlX[touchControl[id]])  {
	            angle = 3.14f - angle;
	        }
	        if ((touchX[id] < controlX[touchControl[id]]) && (touchY[id] > controlY[touchControl[id]]))  {
	            angle = 6.28f + angle;
	        }
        
	        float prevAngle = prevControlAngle[touchControl[id]];
	        ofLog(OF_LOG_VERBOSE, "prev, angle: %f, %f", prevAngle, angle);
	        if ((prevAngle>3)&&(prevAngle<=4)&&(angle>4)&&(angle<5)) {
	            crossedHighCW[touchControl[id]] = YES;
	        }
	        if ((prevAngle>=4)&&(prevAngle<5)&&(angle<4)&&(angle>3)) {
	            crossedHighCC[touchControl[id]] = YES;
	        }
	        if ((prevAngle>4)&&(prevAngle<=5)&&(angle>5)&&(angle<6)) {
	            crossedLowCW[touchControl[id]] = YES;
	        }
	        if ((prevAngle>=5)&&(prevAngle<6)&&(angle<5)&&(angle>4)) {
	            crossedLowCC[touchControl[id]] = YES;
	        }
	        if (pinnedHigh[touchControl[id]] && crossedHighCC[touchControl[id]]) {
	            pinnedHigh[touchControl[id]] = NO;
	            crossedHighCC[touchControl[id]] = NO;
	        }
        
	        if (pinnedLow[touchControl[id]] && crossedLowCW[touchControl[id]]) {
	            pinnedLow[touchControl[id]] = NO;
	            crossedLowCW[touchControl[id]]=NO;
	        }
        
	        // Can't remember what cases these satisfy...
	        if ((prevAngle>=5)&&(angle>5)&&(angle<6)) {
	            pinnedLow[touchControl[id]] = NO;
	        }
	        if ((angle<4)&&(prevAngle<4)) {
	            pinnedHigh[touchControl[id]] = NO;
	        }
        
	        // map value here
        
	        if (pinnedHigh[touchControl[id]] || crossedHighCW[touchControl[id]]) {
	            angle = 4;
	            pinnedHigh[touchControl[id]] = YES;
	            crossedHighCW[touchControl[id]]=NO;
	        }
        
	        if (pinnedLow[touchControl[id]] || crossedLowCC[touchControl[id]]) {
	            angle = 5;
	            pinnedLow[touchControl[id]] = YES;
	            crossedLowCC[touchControl[id]] = NO;
	        }
        
	        prevControlAngle[touchControl[id]] = controlAngle[touchControl[id]];
	        controlAngle[touchControl[id]] = angle;
        
	        float value;
	        if (angle >= 5) {
	            value = angle-5;
	        } else {
	            value = (angle+1.283f);
	        }
        
	        ofLog(OF_LOG_VERBOSE, "value: %f", value);
	        ofLog(OF_LOG_VERBOSE, "pinnedHIGH: %d", pinnedHigh[touchControl[id]]);
	        ofLog(OF_LOG_VERBOSE, "pinnedLOW: %d", pinnedLow[touchControl[id]]);
        
	        if (controlValue[touchControl[id]] != (value / 5.283f)) {}
	        controlValue[touchControl[id]] = (value / 5.283f);
	        return true;
	    } else {
	        return false;
	    }
	}

	Boolean ofApp::calculateTouchAngle(int id) {
	    float d1 = touchY[id]-controlY[touchControl[id]];
	    float d2 = touchX[id]-controlX[touchControl[id]];
	    float r = sqrt(pow(d1,2) + pow(d2,2));
	    float angle=0;
	    if (r>0) {
	        angle = asin(d1/r);
	        if ((touchX[id] > controlX[touchControl[id]]) && (touchY[id] < controlY[touchControl[id]]))  {
	            angle = 3.1415f - angle;
	        }
	        if ((touchX[id] > controlX[touchControl[id]]) && (touchY[id] > controlY[touchControl[id]]))  {
	            angle = 6.283f + angle;
	        }
	    }
    
	    touchValueX[touchControl[id]] = angle/6.283f;
	    touchValueY[touchControl[id]] = r/100.0;
        
	     ofLog(OF_LOG_VERBOSE, "TouchValues: %f, %f)", touchValueX[touchControl[id]], touchValueY[touchControl[id]]);
	    return true;  // changed
	}*/
}


function RavelSwitch(json) {
	this.value = false;
	this.area = json["area"];
    this.parentId = json["parent-id"];
	this.id = json["id"];
	this.subtype = json["subtype"];  // 0 = noisemusick-style, 1 = drom-style
	this.ref = this.parentId + "-" + this.id,
	this.x = json["x"];  // center x
	this.y = json["y"];  // center y
	this.w = json["w"];
	this.h = json["h"];
	this.touchW = json["touch-w"];
	this.touchH = json["touch-h"];
	this.interfaces = json["interfaces"];  // list of input, output
	this.interfacePatchNames = json["interface-patch-names"];  // corresponds to interfaces
	this.angle = json["angle"];
	this.position = json["position"];   // absolute to position, none to let css control placement
	
	this.getWidgetCode = function() {
		let offImg = "ravel/control-images/switch/switch-" + this.subtype + "/switch-off.png";
		let onImg = "ravel/control-images/switch/switch-" + this.subtype + "/switch-on.png";
		
		return `<div class="switch-wrapper" id="switch-` + this.ref + `-wrapper">
		<div class="control switch switch-` + this.ref  + `" id="switch-` + this.ref + `">
			<img class="control-img switch-` + this.subtype + `-off" id="switch-` + this.ref + `-off" src="` + offImg + `">	
			<img class="control-img switch-` + this.subtype + `-on" id="switch-` + this.ref  + `-on" src="` + onImg + `">
			<div style="z-index:1000;" class="touch-point" id="switch-touch-point-` + this.ref + `"></div>
		</div>
		</div>
		`
		;
	}
	this.addControlToPage = function() {
		console.log(this.area);
		document.getElementById(this.area).innerHTML += this.getWidgetCode();
		if (position = "absolute") {
			document.getElementById("switch-" + this.ref + "-wrapper").style["position"] = "absolute";
			document.getElementById("switch-" + this.ref + "-wrapper").style["top"] = this.y + "px";
			document.getElementById("switch-" + this.ref + "-wrapper").style["left"] = this.x + "px";
			document.getElementById("switch-" + this.ref + "-wrapper").style["display"] = "block";
		}
		
		// fudge factor is a hack to correct for existing images
		let fudgeX = 0;
		let fudgeY = 0;
		document.getElementById("switch-" + this.ref).style["width"] = this.w;
		document.getElementById("switch-" + this.ref).style["height"] = this.h;
	
		document.getElementById("switch-touch-point-" + this.ref).style["width"] = this.touchW;
		document.getElementById("switch-touch-point-" + this.ref).style["height"] = this.touchH;
	
		document.getElementById("switch-" + this.ref + "-off").style["width"] = this.touchW;
		document.getElementById("switch-" + this.ref + "-off").style["height"] = this.touchH;
		
		document.getElementById("switch-" + this.ref + "-on").style["width"] = this.touchW;
		document.getElementById("switch-" + this.ref + "-on").style["height"] = this.touchH;
		
		this.setSwitchState();
	}
	this.setSwitchState = function() {
		if (this.value) {
			document.getElementById("switch-" + this.ref + "-off").style["visibility"] = "hidden";
			document.getElementById("switch-" + this.ref + "-on").style["visibility"] = "visible";
		} else {
			document.getElementById("switch-" + this.ref + "-off").style["visibility"] = "visible";
			document.getElementById("switch-" + this.ref + "-on").style["visibility"] = "hidden";
		}
	}
	this.toggleSwitch = function() {
		
		this.value = !this.value;
		this.setSwitchState();
	}
	this.inBounds = function(x1, y1) {
		if ((x1 < (this.x + this.w/2)) && (x1 > (this.x - this.w/2)) &&
			(y1 < (this.y + this.h/2)) && (y1 > (this.y - this.h/2))) {
				console.log("inBounds!");
			return true;
		} else {
			return false;
		}
	}
	this.touchDown = function(e) {
		
		console.log("******DOWN on " + this.ref);
		this.toggleSwitch();
	}
	this.touchMoved = function(e) {
		
		console.log("******MOVED to " + e.clientX + "  " + e.clientY);
	}
	this.touchUp = function(e) {
		
		console.log("******UP on " + this.ref);
	}
	
}

function RavelTouch(json) {
	this.valueX = 0;
	this.valueY = 0;
	this.area = json["area"];
    this.parentId = json["parent-id"];
	this.id = json["id"];
	this.subtype = json["subtype"];  // 0 = noisemusick-style
	this.ref = this.parentId + "-" + this.id,
	this.x = json["x"];  // center x
	this.y = json["y"];  // center y
	this.w = json["w"];
	this.h = json["h"];
	this.touchW = json["touch-w"];
	this.touchH = json["touch-h"];
	this.touchX = json["toouch-x"];
	this.touchY = json["touch-y"];
	this.borderRadius = json["border-radius"];
	this.interfaces = json["interfaces"];  // list of input, output
	this.interfacePatchNames = json["interface-patch-names"];  // corresponds to interfaces
	this.angle = json["angle"];
	this.position = json["position"];   // absolute to position, none to let css control placement
	
	this.getWidgetCode = function() {

		return `<div class="touch-wrapper" id="touch-` + this.ref + `-wrapper">
		<div class="control touch touch-` + this.ref  + `" id="touch-` + this.ref + `">
			<div style="z-index:1000;" class="touch-point" id="touch-touch-point-` + this.ref + `"></div>
		</div>
		</div>
		`
		;
	}
	
	this.inBounds = function(x1, y1) {
		if ((x1 < (this.x + this.w/2)) && (x1 > (this.x - this.w/2)) &&
			(y1 < (this.y + this.h/2)) && (y1 > (this.y - this.h/2))) {
				console.log("inBounds!");
			return true;
		} else {
			return false;
		}
		
	}
	
	this.touchDown = function(e) {	
		this.touchX = e.clientX;
		this.touchY = e.clientY;
		console.log("******DOWN on " + this.ref);
	}
	
	this.touchMoved = function(e) {
		if (this.inBounds(e.clientX, e.clientY)) {
			this.touchX = e.clientX;
			this.touchY = e.clientY;
			this.valueX = (this.touchX - this.x + this.w/2) / this.w;
			this.valueY = (this.touchY - this.y + this.h/2) / this.h;
			console.log("Value changed " + this.valueX + " " + this.valueY );
		}

	}
	
	this.touchUp = function(e) {
		console.log("******UP on " + this.ref);
	}
	
	this.addControlToPage = function() {
		console.log(this.area);
		document.getElementById(this.area).innerHTML += this.getWidgetCode();
		if (position = "absolute") {
			document.getElementById("touch-" + this.ref + "-wrapper").style["position"] = "absolute";
			document.getElementById("touch-" + this.ref + "-wrapper").style["top"] = (this.y - this.touchH/2) + "px";
			document.getElementById("touch-" + this.ref + "-wrapper").style["left"] = (this.x - this.touchW/2) + "px";
			document.getElementById("touch-" + this.ref + "-wrapper").style["display"] = "block";
		}
		
		// fudge factor is a hack to correct for existing images
		let fudgeX = 0;
		let fudgeY = 0;
		document.getElementById("touch-" + this.ref).style["width"] = this.w;
		document.getElementById("touch-" + this.ref).style["height"] = this.h;
	
		document.getElementById("touch-touch-point-" + this.ref).style["width"] = this.touchW;
		document.getElementById("touch-touch-point-" + this.ref).style["height"] = this.touchH;
		document.getElementById("touch-touch-point-" + this.ref).style["border-radius"] = this.borderRadius;
		
		/*document.getElementById("touch-touch-point-display-" + this.ref).style["width"] = "10px";
		document.getElementById("touch-touch-point-display-" + this.ref).style["height"] = "10px";
		this.updateTouchPosition(this.touchX, this.touchY);
		document.getElementById("touch-touch-point-display-" + this.ref).style["border-radius"] = "100%";*/
	}
	
}

function RavelSlider(json) {
	this.value = 0;
	this.area = json["area"];
    this.parentId = json["parent-id"];
	this.id = json["id"];
	this.subtype = json["subtype"];  // 0 = noisemusick-style, 1 = drom-style
	this.ref = this.parentId + "-" + this.id,
	this.x = json["x"];  // center x
	this.y = json["y"];  // center y
	this.w = json["w"];
	this.h = json["h"];
	this.sliderX = json["slider-x"];
	this.sliderY = json["slider-y"];
	this.sliderW = json["slider-w"];
	this.sliderH = json["slider-h"];
	this.touchW = json["touch-w"];
	this.touchH = json["touch-h"];
	this.interfaces = json["interfaces"];  // list of input, output
	this.interfacePatchNames = json["interface-patch-names"];  // corresponds to interfaces
	this.angle = json["angle"];
	this.position = json["position"];   // absolute to position, none to let css control placement
	
	this.getWidgetCode = function() {
		let sliderImg = "ravel/control-images/slider/slider-" + this.subtype + "/slider.png";
		
		return `<div class="wrapper slider-wrapper" id="slider-` + this.ref + `-wrapper">
		<div class="control slider slider-` + this.ref  + `" id="slider-` + this.ref + `">
			<img class="control-img slider-` + this.subtype + `" id="slider-` + this.ref + `-img" src="` + sliderImg + `">	
			<div style="z-index:1000;" class="touch-point" id="slider-touch-point-` + this.ref + `"></div>
		</div>
		</div>
		`
		;
	}
	this.addControlToPage = function() {
		
		console.log("Adding slider to page");
		document.getElementById(this.area).innerHTML += this.getWidgetCode();
		if (position = "absolute") {
			document.getElementById("slider-" + this.ref + "-wrapper").style["position"] = "absolute";
			document.getElementById("slider-" + this.ref + "-wrapper").style["top"] = this.y + "px";
			document.getElementById("slider-" + this.ref + "-wrapper").style["left"] = this.x + "px";
			document.getElementById("slider-" + this.ref + "-wrapper").style["display"] = "block";
		}
		
		// fudge factor is a hack to correct for existing images
		let fudgeX = 0;
		let fudgeY = 0;
		document.getElementById("slider-" + this.ref + "-wrapper").style["width"] = this.w;
		document.getElementById("slider-" + this.ref + "-wrapper").style["height"] = this.h;
	
		document.getElementById("slider-touch-point-" + this.ref).style["width"] = this.touchW;
		document.getElementById("slider-touch-point-" + this.ref).style["height"] = this.touchH;
		document.getElementById("slider-touch-point-" + this.ref).style["left"] = this.sliderX + fudgeX;
		document.getElementById("slider-touch-point-" + this.ref).style["transform"] = "translate(-50%, 0%)";
	
		document.getElementById("slider-" + this.ref + "-img").style["width"] = this.sliderW;
		document.getElementById("slider-" + this.ref + "-img").style["height"] = this.sliderH;
		document.getElementById("slider-" + this.ref + "-img").style["left"] = this.sliderX + fudgeX;
		document.getElementById("slider-" + this.ref + "-img").style["transform"] = "translate(-50%, 0%)";
	}
	
	this.inBounds = function(x1, y1) {
		let xOffset = this.x - this.w/2;
		console.log(xOffset);
		console.log(x1 + " "  + (xOffset + this.sliderX + this.sliderW/2));
		console.log(x1 + " "  + (xOffset + this.sliderX - this.sliderW/2));
		console.log("y" + y1 + " "  + (this.y + this.sliderH/2));
		console.log(y1 + " "  + (this.y - this.sliderH/2));
		if ((x1 < (xOffset + this.sliderX + this.sliderW/2)) && (x1 > (xOffset + this.sliderX - this.sliderW/2)) &&
			(y1 < (this.y + this.sliderH/2)) && (y1 > (this.y - this.sliderH/2))) {
				console.log("inBounds!");
			return true;
		} else {
			return false;
		}
	}
	
	this.touchDown = function(e) {
		console.log("******DOWN on " + this.ref);
	}
	this.touchMoved = function(e) {	
		console.log("******MOVED to " + e.clientX + "  " + e.clientY);
		let newX = e.clientX;
		console.log("newX " + newX);
		console.log(this.sliderX / this.w);
		if ((newX >= this.sliderW/2) && (newX <= (this.x + this.w/2))) {
			this.sliderX = newX - this.sliderW/2;
			this.value = this.sliderX / this.w;
			document.getElementById("slider-" + this.ref + "-img").style["left"] = this.sliderX;
			document.getElementById("slider-touch-point-" + this.ref).style["left"] = this.sliderX;
		}
	}
	this.touchUp = function(e) {
		console.log("******UP on " + this.ref);
	}
}


function RavelLed(json) {
	this.value = false;
	this.area = json["area"];
    this.parentId = json["parent-id"];
	this.id = json["id"];
	this.subtype = json["subtype"];  // 0 = noisemusick-style, 1 = drom-style
	this.ref = this.parentId + "-" + this.id,
	this.x = json["x"];  // center x
	this.y = json["y"];  // center y
	this.w = json["w"];
	this.h = json["h"];
	this.interfaces = json["interfaces"];  // list of input, output
	this.interfacePatchNames = json["interface-patch-names"];  // corresponds to interfaces
	this.angle = json["angle"];
	this.position = json["position"];   // absolute to position, none to let css control placement
	
	this.getWidgetCode = function() {
		let onImg = "ravel/control-images/led/led-" + this.subtype + "/led-on.png";
		
		return `<div class="led-wrapper" id="led-` + this.ref + `-wrapper">
		<div class="control led led-` + this.ref  + `" id="led-` + this.ref + `">
			<img class="control-img led-` + this.subtype + `-on" id="led-` + this.ref  + `-on" src="` + onImg + `">
		</div>
		</div>
		`
		;
	}
	
	this.toggleBlink = function(thisRef) {
        thisRef.value = !thisRef.value;
		if (thisRef.value) {
			document.getElementById("led-" + thisRef.ref + "-on").style["visibility"] = "visible";
		} else {
			document.getElementById("led-" + thisRef.ref + "-on").style["visibility"] = "hidden";
		}
	}
	
	this.addControlToPage = function() {
		console.log(this.area);
		document.getElementById(this.area).innerHTML += this.getWidgetCode();
		if (position = "absolute") {
			document.getElementById("led-" + this.ref + "-wrapper").style["position"] = "absolute";
			document.getElementById("led-" + this.ref + "-wrapper").style["top"] = this.y + "px";
			document.getElementById("led-" + this.ref + "-wrapper").style["left"] = this.x + "px";
			document.getElementById("led-" + this.ref + "-wrapper").style["display"] = "block";
		}
		
		// fudge factor is a hack to correct for existing images
		let fudgeX = 0;
		let fudgeY = 0;
		document.getElementById("led-" + this.ref).style["width"] = this.w;
		document.getElementById("led-" + this.ref).style["height"] = this.h;
		
		document.getElementById("led-" + this.ref + "-on").style["width"] = this.touchW;
		document.getElementById("led-" + this.ref + "-on").style["height"] = this.touchH;
		document.getElementById("led-" + this.ref + "-on").style["mix-blend-mode"] = "multiply"
		
		
	}
	this.blinkIt = setInterval(this.toggleBlink, 500, this);
	this.setBlinkInterval = function(n) {
		this.blinkIt = setInterval(this.toggleBlink, n, this);
	}
	this.inBounds = function(x1, y1) {
		if ((x1 < (this.x + this.w/2)) && (x1 > (this.x - this.w/2)) &&
			(y1 < (this.y + this.h/2)) && (y1 > (this.y - this.h/2))) {
				console.log("inBounds!");
			return true;
		} else {
			return false;
		}
	}
	this.touchDown = function(e) {
		console.log("******DOWN on " + this.ref);
	}
	this.touchMoved = function(e) {
		console.log("******MOVED to " + e.clientX + "  " + e.clientY);
	}
	this.touchUp = function(e) {
		
		console.log("******UP on " + this.ref);
	}
	
}