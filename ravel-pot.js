import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelPot extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #pot-container {
            cursor: pointer;
        }
        #pot-marker, #pot-knob {
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
        return ['size', 'x', 'y', 'marker', 'icon', 'marker', 'angle', 'value', 'signals'];
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
        this.marker = 'black-circle';
        this.icon = 'white-circle';
        this.size = 24;
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);  
        this.potKnob.textContent = RavelEmoji[`${this.icon}`];
        this.potMarker .textContent = RavelEmoji[`${this.marker}`]; 
        this.container.style['font-size'] = `${this.size}px`;
        this.container.style['width'] = `${this.size}px`;
        this.container.style['height'] = `${this.size}px`;
        this.potMarker.style['font-size'] = `${this.size / 5}px`;
        this.potMarker.style['top'] = `-${this.size - this.size / 16}px`;
        this.potMarker.style['left'] = `${this.size / 10}px`;
        this.potKnob.style['line-height'] = `-${this.size}px`;
        this.potKnob.style['top'] = `-${this.size / 8}px`;
        this.potMarker.style['opacity'] = `0.75`;
        // x, y are the center point
        this.centerX = this.container.getBoundingClientRect().left + this.size / 2;
        this.centerY = this.container.getBoundingClientRect().top + this.size / 2;
        this.addEventListener('mousedown', (e) => { 
           // console.log("mousedown");
            e.preventDefault();
            this.calculatePotAngle(e.clientX, e.clientY);
            this.mouseMoveCallback = this.dragElement.bind(this); 
            this.mouseUpCallback = this.endDragElement.bind(this);
            document.addEventListener('mousemove', this.mouseMoveCallback);
            document.addEventListener('mouseup', this.mouseUpCallback);
            document.addEventListener('mouseleave', this.mouseUpCallback);
  	  });
    }
    
    dragElement(e) {
        e.preventDefault();
        this.calculatePotAngle(e.clientX, e.clientY);
        //console.log(e.clientX + ", " + e.clientY);
    }
    
    endDragElement() {
        document.removeEventListener('mousemove', this.mouseMoveCallback);
        document.removeEventListener('mouseup', this.mouseUpCallback);
        document.removeEventListener('mouseout', this.mouseUpCallback);
        document.removeEventListener('mouseleave', this.mouseUpCallback);
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }
    
    calculatePotAngle(x, y) {
    	let d1 = y - this.centerY;
    	let d2 = x - this.centerX;
    	let r = Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2));
    	let a = -Math.asin(d1 / r);
        if (x > this.centerX)  {
            a = 3.14 - a;
        }
        if ((x < this.centerX) && (y > this.centerY))  {
            a = 6.28 + a;
        }
    	//console.log("Angle " + (a * 57.296));
    	a = (a * 57.296);
        // TODO: add a check for pinned High or Low
        if (!((a > 210) && (a < 300))) {
            this.angle = a;
            this.container.style["transform"] = "rotate(" + this.angle + "deg)";
        }
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name.includes('size')) {
            this.size = Number(newValue);
        }
        if (name === 'x') {
            this.container.style.position = 'fixed';
            this.x = newValue;
            this.container.style.left = newValue;
        }
        if (name === 'y') {
            this.container.style.position = 'fixed';
            this.y = newValue;
            this.container.style.top = newValue;
        }
        if (name === 'orientation') {
            this.orientation = newValue;
        }
        if (name.includes('icon')) {
            this.icon = newValue;
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
