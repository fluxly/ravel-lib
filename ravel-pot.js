import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelPot extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #pot-marker {
            position: relative;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="pot-container">
        <div id="pot-knob"></div>
        <div id="pot-marker"></div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['size', 'x', 'y', 'marker', 'color', 'marker', 'angle', 'value', 'signals'];
    }

    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = globalStyles
            + this.constructor.localStyles
            + this.constructor.html;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.initialize();
    }
  
    connectedCallback() {
        this.setup();
    }
    
    disconnectedCallback() {
        this.teardown();
    }
    
    initialize() {
        this.container = this.shadowRoot.querySelector('#pot-container');
        this.potMarker = this.shadowRoot.querySelector('#pot-marker');
        this.potKnob = this.shadowRoot.querySelector('#pot-knob');
        this.marker = '〰️';
        this.color = 'white';
        this.size = 24;
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);  
        this.potKnob.textContent = RavelEmoji[`${this.color}-circle`];
        this.potMarker .textContent = this.marker; 
        this.container.style['font-size'] = `${this.size}px`;
        this.potMarker.style['font-size'] = `${this.size / 3}px`;
        this.potMarker.style['top'] = `${this.size / 2}px`;
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }
    calculatePotAngle(x, y) {
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
    	//document.getElementById("pot-" + this.ref).style["transform"] = "rotate(" + this.angle + "deg)";
    }

    inBounds(x1, y1) {
    	if ((x1 < (this.x + this.w/2)) && (x1 > (this.x - this.w/2)) &&
    		(y1 < (this.y + this.h/2)) && (y1 > (this.y - this.h/2))) {
    			console.log("inBounds!");
    		return true;
    	} else {
    		return false;
    	}
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('color')) {
            this.color = newValue;
        }
        if (name.includes('marker')) {
            this.marker = newValue;
        }
        if (name.includes('angle')) {
            this.angle = Number(newValue);
        }
        if (name.includes('value')) {
            this.value = Number(newValue);
        }
        if (name.includes('signals')) {
            this.signals = newValue.split(',');
        }
    }
}

customElements.define('ravel-pot', RavelPot);
