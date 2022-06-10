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
            cursor:pointer;
        }
        #slider-handle-1, #slider-handle-2 {
            position: absolute;
        }
        #slider-handle-2 {
            display:none;
            float:right;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="slider-container">
        <div id="slider-handle-2" draggable="true"></div>
        <div id="slider-handle-1" draggable="true"></div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
       return ['slider-id', 'sliders', 'length', 'size', 'x', 'y', 'orientation', 'value', 'icon', 'signals'];
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
        this.handle = this.shadowRoot.querySelector('#slider-handle-1');
        this.handle2 = this.shadowRoot.querySelector('#slider-handle-2');
        this.sliderId = 0;
        this.length = 300;
        this.size = 24;
        this.orientation = 'horizontal';
        this.value = 0.5;
        this.sliders = 1;
        this.stateSignals = `slider-${this.sliderId}`;
    }
  
    setup() {
        this.observedMessages = ['message'];
        this.container.style['font-size'] = `${this.size}px`;
        this.padding = this.size / 5;
        let bottomPadding = this.padding * 1.5;
        
        if (this.orientation === 'horizontal') {
            this.container.style['width'] = `${this.length}px`;
            this.container.style['height'] = `${this.size / 2 + 4 }px`;
            this.container.style['margin-bottom'] = `${this.size / 2 }px`;
            this.container.style['border-bottom'] = `3px dotted #aaaaaa`;
            this.handle2.style.left = `${this.length - this.size}px`;
        } else {
            this.container.style['width'] = `${this.size / 2}px`;
            this.container.style['height'] = `${this.length}px`;
            this.container.style['border-right'] = `3px dotted #aaaaaa`;
            this.container.style['margin-right'] = `${this.size / 2 }px`;
            this.handle2.style.top = `${this.length - this.size}px`;
        }
        if (this.sliders === 2) this.handle2.style.display = 'block';
        // TODO: set the position of the handle for passed in attributes
        let icon = RavelEmoji.getRandomEmoji()
        console.log(icon);
        this.handle.textContent = icon;
        this.handle2.textContent = icon;
        this.containerX = this.container.getBoundingClientRect().left;
        this.containerY = this.container.getBoundingClientRect().top;
        this.handleX = this.handle.getBoundingClientRect().left;
        this.handleY = this.handle.getBoundingClientRect().top;
        this.handle2X = this.handle.getBoundingClientRect().left;
        this.handle2Y = this.handle.getBoundingClientRect().top;
        this.updateValues();
        // bind changes signature, store the callback so we can later remove when dropped
        this.mouseDownCallback = this.handleMouseDown.bind(this);
        this.mouseMoveCallback = this.dragElement.bind(this); 
        this.mouseUpCallback = this.endDragElement.bind(this); 
        this.handle.addEventListener('mousedown', this.mouseDownCallback);
        this.handle2.addEventListener('mousedown', this.mouseDownCallback);
    }
    handleMouseDown(e) {
        e.preventDefault();
        this.startX = e.clientX;
        this.startY = e.clientY;
        document.addEventListener('mousemove', this.mouseMoveCallback);
        document.addEventListener('mouseup', this.mouseUpCallback);
        document.addEventListener('mouseleave', this.mouseUpCallback);
    }
    
    dragElement(e) {
        e.preventDefault();
        let x = this.startX - e.clientX;
        let y = this.startY - e.clientY;
        let draggedHandle = e.target;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.handleX = this.handle.getBoundingClientRect().left;
        this.handleY = this.handle.getBoundingClientRect().top;
        if (this.orientation === 'horizontal') {
            if (x > 0) {
                // moving left
                if ((this.handleX - x) > (this.containerX + this.padding)) {
                    this.handle.style.left = (this.handle.offsetLeft - x) + 'px';
                    this.updateValues();
                } 
            }
            if (x < 0) {
                // moving right
                if (((this.handleX - x) < (this.containerX + this.length + this.padding - this.size))) {
                    this.handle.style.left = (this.handle.offsetLeft - x) + 'px';
                    this.updateValues();
                } 
            }
        } else {
            if (y > 0) {
                // moving down
                if ((this.handleY - y) > (this.containerY + this.padding)) {
                    this.handle.style.top = (this.handle.offsetTop - y) + 'px';
                    this.updateValues();
                } 
            }
            if (y < 0) {
                // moving up
                if (((this.handleY - y) < (this.containerY + this.length + this.padding - this.size))) {
                    this.handle.style.top = (this.handle.offsetTop - y) + 'px';
                    this.updateValues();
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
     
    updateValues() {
        if (this.orientation === 'horizontal') {
            this.value = (this.handleX - (this.containerX + this.padding * 2)) / this.length;
        } else {
            this.value = ((this.containerY + this.padding * 2) - this.handleY) / this.length;
        }
        //console.log(this.value);
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
       this.handle.removeEventListener('mousedown', this.mouseDownCallback);
       this.handle2.removeEventListener('mousedown', this.mouseDownCallback);
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
        if (name === 'slider-id') {
            this.sliderId = newValue;
        }
        if (name === 'sliders') {
            this.sliders = parseInt(newValue, 10);
        }
        if (name === 'length') {
            this.length = Number(newValue);
        }
        if (name === 'value') {
            this.value = Number(newValue);
        }
        if (name === 'signals') {
            this.signal = newValue.split(',');
        }
    }
}

customElements.define('ravel-slider', RavelSlider);
