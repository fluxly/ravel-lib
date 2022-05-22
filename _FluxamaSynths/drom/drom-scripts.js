var InstrumentDefs = [
	{
		"name" : "drom-0",
		"patch": "drom1.pd",
		"menuimage" : "images/InstrumentImages/Drom-ipad.png",
		"background" : "images/InstrumentImages/Drom-ipad.png",
		"controls" : [
			{ "area" : "instrument-control-section", "id" : 0, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 124, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 1, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 328, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 2, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 694, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 3, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 898, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 4, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 124, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 5, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 314, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 6, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 502, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
						
			{ "area" : "instrument-control-section", "id" : 8, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 693, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 9, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 898, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			
			{ "area" : "instrument-control-section", "id" : 10, "type" : "switch-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 515, "y" : 129	, "w" : 85, "h" : 72, "touch-w" : 85, "touch-h" : 72, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 11, "type" : "led-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 457, "y" : 162, "w" : 80, "h" : 80, 
			  "touch-w" : 80, "touch-h" : 80, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 8, "type" : "slider-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 510, "y" : 380, "w" : 730, "h" : 124, "slider-w" : 200, "slider-h" : 124, "slider-x" : 0, "slider-y" : 0, 
			  "touch-w" : 200, "touch-h" : 124, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" }
		  ]
	},
	{
		"name" : "drom-1",
		"patch": "drom.pd",
		"menuimage" : "images/InstrumentImages/Drom2-ipad.png",
		"background" : "images/InstrumentImages/Drom2-ipad.png",
		"controls" : [
			{ "area" : "instrument-control-section", "id" : 0, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 124, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 1, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 328, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 2, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 694, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 3, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 898, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "false",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 4, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 124, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 5, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 314, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 6, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 502, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
						
			{ "area" : "instrument-control-section", "id" : 8, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 693, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 9, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 898, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			
			{ "area" : "instrument-control-section", "id" : 10, "type" : "switch-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 515, "y" : 129	, "w" : 85, "h" : 72, "touch-w" : 85, "touch-h" : 72, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 11, "type" : "led-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 457, "y" : 162, "w" : 80, "h" : 80, 
			  "touch-w" : 80, "touch-h" : 80, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 8, "type" : "slider-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 510, "y" : 380, "w" : 730, "h" : 124, "slider-w" : 200, "slider-h" : 124, "slider-x" : 0, "slider-y" : 0, 
			  "touch-w" : 200, "touch-h" : 124, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" }
			
	        
		  ]
	},
	
	{
		"name" : "drom-2",
		"patch": "drom3.pd",
		"menuimage" : "images/InstrumentImages/Drom3-ipad.png",
		"background" : "images/InstrumentImages/Drom3-ipad.png",
		"controls" : [
			{ "area" : "instrument-control-section", "id" : 0, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 124, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 1, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 328, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 2, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 694, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 3, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 898, "y" : 138, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 4, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 124, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 5, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 314, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 6, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 502, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
						
			{ "area" : "instrument-control-section", "id" : 8, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 693, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 9, "type" : "pot-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 898, "y" : 518, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
			
			{ "area" : "instrument-control-section", "id" : 10, "type" : "switch-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 515, "y" : 129	, "w" : 85, "h" : 72, "touch-w" : 85, "touch-h" : 72, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 11, "type" : "led-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 457, "y" : 162, "w" : 80, "h" : 80, 
			  "touch-w" : 80, "touch-h" : 80, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 8, "type" : "slider-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 510, "y" : 380, "w" : 730, "h" : 124, "slider-w" : 200, "slider-h" : 124, "slider-x" : 0, "slider-y" : 0, 
			  "touch-w" : 200, "touch-h" : 124, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" }
		  ]
	}
];

var instruments = [];
var menuItems = [];
var menuScene = true; 

function dromSetupMenu() {

	// Set up controls list
	for (i = 0; i < InstrumentDefs.length; i++) {
		console.log(InstrumentDefs[i].name);
		instruments.push({ "name": InstrumentDefs[i]["name"], 
		                   "patch": InstrumentDefs[i]["patch"],
		                   "menuimage": InstrumentDefs[i]["menuimage"],
		                   "background": InstrumentDefs[i]["background"] });
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

}


function dromSetup(n) {

	// Set up controls list
	for (i = 0; i < InstrumentDefs.length; i++) {
		console.log(InstrumentDefs[i].name);
		instruments.push({ "name": InstrumentDefs[i]["name"], 
		                   "patch": InstrumentDefs[i]["patch"],
		                   "menuimage": InstrumentDefs[i]["menuimage"],
		                   "background": InstrumentDefs[i]["background"] });
	}
	
	
        document.getElementById("instrument-section").innerHTML += `
	        <div class="instrument-wrapper" id="instrument-wrapper-` + n + `">
		        <div class="instrument-background" id="instrument-background-` + n +`">
			        <img class="instrument-background-img" src="` + instruments[n]["background"] + `">
		        </div>
		        <a class="exit-button" onclick="exitToMenu()"><img class="exit-button-img" src="images/ControlImages/navMenuExit-ipad-hd.png"/></a>
	        </div>
		`

    RavelController.setupControls(InstrumentDefs[n]["controls"]);

}

function openInstrument(n) {
	console.log("OPEN");
	document.getElementById("menu-section").style["display"] = "none";
	document.getElementById("instrument-frame").src="instrument-" + n + ".html";
    document.getElementById("instrument-frame").style["display"] = "block";
}

function exitToMenu() {
	parent.contentDocument.getElementById("menu-section").style["display"] = "block";
	parent.contentDocument.getElementById("instrument-frame").style["display"] = "none";
}
