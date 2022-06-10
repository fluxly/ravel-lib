import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js'

export default class RavelFluxum extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #bubble-container {
            display: none;
            position:absolute;
        }
        #container {
            position:absolute;
          
        }
        #bubble {
            font-family: "Silkscreen";
            font-size: 10;
            color: #333333;
            background-color: #ffffff;
            padding:4px 10px 4px 10px;
            border: 1px solid #333333;
        }
        #eyes-closed {
            display:none;
        }
        .green-glow {
            background-color: rgba(45,255,196,0.5);
            box-shadow: 0px 0px 20px 20px rgba(45,255,196,0.5);
        }
        .red-glow {
            background-color: rgba(255,0,0,0.5);
            box-shadow: 0px 0px 20px 20px rgba(255,0,0,0.5);
        }
        .yellow-glow {
            background-color: rgba(255,255,0,0.5);
            box-shadow: 0px 0px 20px 20px rgba(255,255,0,0.5);
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="container" >
        <div id="icon">😶</div>
        </div>
        <div id="bubble-container">
        <div id="bubble">Hello World 🐵😑</div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['icon', 'size', 'x', 'y', 'angle', 'bubble-text-size', 'color'];
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
        this.icon = this.shadowRoot.querySelector('#icon');
        this.bubble = this.shadowRoot.querySelector('#bubble-container');
        this.angle = 0;
    }
  
    setup() {
        this.observedMessages = ['message'];
        this.icon.style['font-size'] = `${this.size}px`;
        this.icon.style['line-height'] = `${this.size}px`;
        this.icon.style['padding-top'] = `${this.size/16}px`;
        this.container.style.top = `${this.y - (this.size / 2)}px`;
        this.container.style.left = `${this.x - (this.size / 2)}px`;
        this.container.style['border-radius'] = `${this.size}px`;
        this.container.style.width = `${this.size}px`;
        this.container.style.height = `${this.size}px`;
        this.container.style.transform = `rotate(${this.angle}deg)`;
        this.bubble.style.left = `${this.x - 200}px`;
        this.bubble.style.top = `${this.y - 20}px`;
        this.subscribe(this.observedMessages);   
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }
    
    transform(x, y, angle) {
        this.x = x;
        this.y = y;
        if (x >= 0) this.container.style.top = `${this.y}px`;
        if (y >= 0) this.container.style.left = `${this.x}px`;
        this.container.style.transform = `rotate(${angle}rad)`;
        this.bubble.style.left = `${this.x - 100}px`;
        this.bubble.style.top = `${this.y - 20}px`;
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'x') {
            this.x = Number(newValue);
        }
        if (name === 'y') {
            this.y = Number(newValue);
        }
        if (name === 'color') {
            this.container.classList.add(`${newValue}-glow`);
        }
        if (name === 'angle') {
            this.angle = Number(newValue);
        }
        if (name === 'icon') {
            this.overlay.innerText = RavelEmoji[newValue];
        } 
        if (name === 'size') {
            this.size = parseInt(newValue, 10);
        }
        if (name === 'bubble-text-size') {
            this.bubble.style['font-size'] = `${newValue}px`;
        }
    }
}

customElements.define('ravel-fluxum', RavelFluxum);
