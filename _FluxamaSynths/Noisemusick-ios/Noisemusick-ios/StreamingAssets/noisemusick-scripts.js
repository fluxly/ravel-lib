var InstrumentDefs = [
	{
		"name" : "noisemusick-0",
		"patch": "noisemusick1.pd",
		"menuimage" : "images/InstrumentImages/NoiseKitMenu-ipad.png",
		"background" : "images/InstrumentImages/NoiseKit-ipad.png",
		"controls" : [
			{ "area" : "instrument-control-section", "id" : 0, "type" : "pot-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 404, "y" : 277, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
            {  "area" : "instrument-control-section", "id" : 1, "type" : "pot-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 622, "y" : 277, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 2, "type" : "switch-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 515, "y" : 608, "w" : 85, "h" : 72, "touch-w" : 85, "touch-h" : 72, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
		
	        {  "area" : "instrument-control-section", "id" : 3, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 170, "y" : 210, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 4, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 170, "y" : 560, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 5, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 860, "y" : 210, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 6, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 860, "y" : 560, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 7, "type" : "led-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 427, "y" : 415, "w" : 80, "h" : 80, 
			  "touch-w" : 80, "touch-h" : 80, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" }
		  ]
	},
	{
		"name" : "noisemusick-1",
		"patch": "noisemusick2.pd",
		"menuimage" : "images/InstrumentImages/NoiseKitPinkMenu-ipad.png",
		"background" : "images/InstrumentImages/NoiseKitPink-ipad.png",
		"controls" : [
			{ "area" : "instrument-control-section", "id" : 0, "type" : "pot-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 404, "y" : 277, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
            {  "area" : "instrument-control-section", "id" : 1, "type" : "pot-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 622, "y" : 277, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 2, "type" : "switch-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 515, "y" : 608, "w" : 85, "h" : 72, "touch-w" : 85, "touch-h" : 72, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
		
	        {  "area" : "instrument-control-section", "id" : 3, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 170, "y" : 210, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 4, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 170, "y" : 560, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 5, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 860, "y" : 210, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 6, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 860, "y" : 560, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 7, "type" : "led-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 427, "y" : 415, "w" : 80, "h" : 80, 
			  "touch-w" : 80, "touch-h" : 80, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" }
		  ]
	},
	
	{
		"name" : "noisemusick-2",
		"patch": "noisemusick3.pd",
		"menuimage" : "images/InstrumentImages/NoiseKitOrangeMenu-ipad.png",
		"background" : "images/InstrumentImages/NoiseKitOrange-ipad.png",
		"controls" : [
			{ "area" : "instrument-control-section", "id" : 0, "type" : "pot-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 406, "y" : 287, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 320, "position" : "absolute" },
			
            {  "area" : "instrument-control-section", "id" : 1, "type" : "pot-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 616, "y" : 287, "w" : 246, "h" : 246, "touch-w" : 85, "touch-h" : 86, "show-top" : "false", "show-marker" : "true",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
			{ "area" : "instrument-control-section", "id" : 2, "type" : "switch-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 515, "y" : 608, "w" : 85, "h" : 72, "touch-w" : 85, "touch-h" : 72, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
		
	        {  "area" : "instrument-control-section", "id" : 3, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 170, "y" : 210, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 4, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 170, "y" : 560, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 5, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 860, "y" : 210, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 6, "type" : "touch-control", "parent-id" : 0, "subtype" : 1, 
			  "x" : 860, "y" : 560, "w" : 280, "h" : 280, 
			  "touch-w" : 280, "touch-h" : 280, "touch-x" : 0, "touch-y" : 0, "border-radius" : "0%",
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" },
			
	        {  "area" : "instrument-control-section", "id" : 7, "type" : "led-control", "parent-id" : 0, "subtype" : 0, 
			  "x" : 427, "y" : 415, "w" : 80, "h" : 80, 
			  "touch-w" : 80, "touch-h" : 80, 
			  "interfaces" : [ "input" ], "interface-patch-names" : [ "feedbake_osc1" ], "angle" : 0, "position" : "absolute" }
		  ]
	}
];

var instruments = [];
var menuItems = [];
var menuScene = true; 

function noisemusickSetupMenu() {

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


function noisemusickSetup(n) {

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
