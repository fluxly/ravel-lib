import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelSequence extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #container {
            position: absolute;
        }
        .cell {
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
        this.period = 400;
        this.shuttle = 0;
        this.cellList = [];
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
                this.shadowRoot.querySelector(`#cell-${this.shuttle}`).innerText = this.iconInactive;
                this.shuttle = (this.shuttle + 1) % this.cells;
                this.shadowRoot.querySelector(`#cell-${this.shuttle}`).innerText = this.iconActive;
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

customElements.define('ravel-sequence', RavelSequence);
