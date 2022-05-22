import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js'

export default class RavelFluxum extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #bubble-container, #container {
            position:absolute;
        }
        #bubble {
            font-family: "Silkscreen";
            font-size: 10;
            background-color: #ffffff;
            padding:4px 10px 4px 10px;
            border: 1px solid #333333;
        }
        #eyes-open, #eyes-closed {
            position:relative;
        }
        #eyes-closed {
            display:none;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="bubble-container">
        <span id="bubble">Hello World 🐵</span>
        </div>
        <div id="container">
        <div id="icon"></div>
        <div id="eyes"><img id="eyes-open" src="${ravelLibPath}/images/eyesOpen.png"/><img id="eyes-closed" src="${ravelLibPath}/images/eyesClosed.png"/></div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['icon', 'size', 'x', 'y', 'angle', 'bubble-text-size'];
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
        this.open = this.shadowRoot.querySelector('#eyes-open');
        this.closed = this.shadowRoot.querySelector('#eyes-closed');
        this.bubble = this.shadowRoot.querySelector('#bubble-container');
    }
  
    setup() {
        this.observedMessages = ['message'];
        this.icon.style['font-size'] = `${this.size}px`;
        this.container.style.left = `${this.x - (this.size / 2)}px`;
        this.container.style.top = `${this.y - (this.size / 2)}px`;
        this.open.style.width = `${this.size}px`;
        this.open.style.top = `${-(this.size * 1.15)}px`;
        this.closed.style.width = `${this.size}px`;
        this.closed.style.top = `${-(this.size * 1.15)}px`;
        this.closed.style.left = `${-(this.size)}px`;
        this.bubble.style.left = `${this.x - (this.size * 2)}px`;
        this.bubble.style.top = `${this.y - (this.size * 1)}px`;
        //this.subscribe(this.observedMessages);   
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name.includes('x')) {
            this.x = Number(newValue);
        }
        if (name.includes('y')) {
            this.y = Number(newValue);
        }
        if (name.includes('icon')) {
            this.icon.innerText = RavelEmoji[newValue];
        } 
        if (name.includes('size')) {
            this.size = parseInt(newValue, 10);
        }
        if (name.includes('bubble-text-size')) {
            this.bubble.style['font-size'] = `${newValue}px`;
        }
    }
}

customElements.define('ravel-fluxum', RavelFluxum);
