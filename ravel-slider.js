import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelSlider extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #slider-container {
            display:inline-block;
            border: 3px solid #aaaaaa;
            border-radius: 20px;
            cursor:pointer;
            background-color:#eeeeee;
        }
        #slider-handle {
            position: absolute;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="slider-container">
        <div id="slider-handle" draggable="true"></div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
       return ['slider-id', 'color', 'length', 'size', 'x', 'y', 'orientation', 'value', 'icon', 'signals'];
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
        this.container = this.shadowRoot.querySelector('#slider-container');
        this.handle = this.shadowRoot.querySelector('#slider-handle');
        this.sliderId = 0;
        this.length = 300;
        this.size = 24;
        this.orientation = 'horizontal';
        this.value = 0.5;
        this.color = 'black';
        this.stateSignals = `slider-${this.sliderId}`;
    }
  
    setup() {
        this.observedMessages = ['message'];
        this.container.style['font-size'] = `${this.size}px`;
        this.padding = this.size / 5;
        let bottomPadding = this.padding * 1.5;
        
        if (this.orientation === 'horizontal') {
            this.container.style['width'] = `${this.length}px`;
            this.container.style['height'] = `${this.size}px`;
            this.container.style['padding'] = `0px ${this.padding}px ${bottomPadding}px ${this.padding}px`;
        } else {
            this.container.style['width'] = `${this.size}px`;
            this.container.style['height'] = `${this.length}px`;
            this.container.style['padding'] = `0px ${this.padding}px ${bottomPadding}px ${this.padding}px`;
        }
        this.container.style['border-radius'] = `${this.size}px`;
        // TODO: set the position of the handle for passed in attributes
        this.handle.textContent = RavelEmoji[`${this.color}-circle`];
        this.containerX = this.container.getBoundingClientRect().left;
        this.containerY = this.container.getBoundingClientRect().top;
        this.handleX = this.handle.getBoundingClientRect().left;
        this.handleY = this.handle.getBoundingClientRect().top;
        this.updateValue();
        this.handle.addEventListener('mousedown', (e) => { 
            console.log("mousedown");
            e.preventDefault();
            this.startX = e.clientX;
            this.startY = e.clientY;
            // bind changes signature, store the callback so we can later remove when dropped
            this.mouseMoveCallback = this.dragElement.bind(this); 
            this.mouseUpCallback = this.endDragElement.bind(this);
            document.addEventListener('mousemove', this.mouseMoveCallback);
            document.addEventListener('mouseup', this.mouseUpCallback);
            document.addEventListener('mouseleave', this.mouseUpCallback);
  	  });
    }
    
    dragElement(e) {
        e.preventDefault();
        let x = this.startX - e.clientX;
        let y = this.startY - e.clientY;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.handleX = this.handle.getBoundingClientRect().left;
        this.handleY = this.handle.getBoundingClientRect().top;
        if (this.orientation === 'horizontal') {
            if (x > 0) {
                // moving left
                if ((this.handleX - x) > (this.containerX + this.padding)) {
                    this.handle.style.left = (this.handle.offsetLeft - x) + 'px';
                    this.updateValue();
                } 
            }
            if (x < 0) {
                // moving right
                if (((this.handleX - x) < (this.containerX + this.length + this.padding - this.size))) {
                    this.handle.style.left = (this.handle.offsetLeft - x) + 'px';
                    this.updateValue();
                } 
            }
        } else {
            if (y > 0) {
                // moving down
                if ((this.handleY - y) > (this.containerY + this.padding)) {
                    this.handle.style.top = (this.handle.offsetTop - y) + 'px';
                    this.updateValue();
                } 
            }
            if (y < 0) {
                // moving up
                if (((this.handleY - y) < (this.containerY + this.length + this.padding - this.size))) {
                    this.handle.style.top = (this.handle.offsetTop - y) + 'px';
                    this.updateValue();
                } 
            }
        }
     }

    endDragElement() {
        document.removeEventListener('mousemove', this.mouseMoveCallback);
        document.removeEventListener('mouseup', this.mouseUpCallback);
        document.removeEventListener('mouseout', this.mouseUpCallback);
        document.removeEventListener('mouseleave', this.mouseUpCallback);
    }
     
    updateValue() {
        if (this.orientation === 'horizontal') {
            this.value = (this.handleX - (this.containerX + this.padding * 2)) / this.length;
        } else {
            this.value = ((this.containerY + this.padding * 2) - this.handleY) / this.length;
        }
        console.log(this.value);
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('slider-id')) {
            this.sliderId = newValue;
        }
        if (name.includes('color')) {
            this.color = newValue;
        }
        if (name.includes('length')) {
            this.length = Number(newValue);
        }
        if (name === 'value') {
            this.value = Number(newValue);
        }
        if (name.includes('signals')) {
            this.signal = newValue.split(',');
        }
    }
}

customElements.define('ravel-slider', RavelSlider);
