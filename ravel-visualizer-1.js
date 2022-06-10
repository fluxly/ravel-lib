import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelVisualizer1 extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #container {
            position: absolute;
        }
        .cell {
            position: relative;
            top: 0px;
            display: inline-block;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="container"></div>
        `;
    }
 
    static get observedAttributes() { 
        return ['cells', 'icon-active', 'icon-inactive', 'size', 'x', 'y', 'orientation', 'sequence-id', 'period'];
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
        this.container = this.shadowRoot.querySelector('#container');
        this.iconActive = RavelEmoji.getRandomEmoji();
        this.iconInactive = RavelEmoji.getRandomEmoji();
        this.period = 150;
        this.cells = 32;
        this.shuttle = 0;
        this.cellList = [];
        this.waveformValues = [];
        this.waveHeight = 300;
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);   
        for (let i = 0; i < this.cells; i++) {
            this.cellList.push(this.iconInactive);
            this.container.innerHTML += `<div class="cell" id="cell-${i}">${this.iconInactive}</div>`;
        }
        this.container.style['font-size'] = `${this.size}px`;
        this.timer = setInterval(
            () => {
                this.waveformValues = toneWaveform.getValue();
                for (let i = 0; i < this.cells; i++) {
                     this.shadowRoot.querySelector(`#cell-${i}`).style.top = this.waveformValues[i * 16] * this.waveHeight;
                }
               
            },
            this.period
        );
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('icon-active')) {
            this.iconActive = newValue;
        }
        if (name.includes('icon-inactive')) {
            this.iconInactive = newValue;
        }
        if (name.includes('cells')) {
            // Must be power of 2
            this.cells = parseInt(newValue, 10);
        }
        if (name === 'size') {
            this.size = parseInt(newValue, 10);
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
        if (name.includes('sequence-id')) {
            this.sliderId = newValue;
        }
    }
}

customElements.define('ravel-visualizer-1', RavelVisualizer1);
