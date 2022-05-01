import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';

export default class RavelEmojiGrid extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #emoji-grid {
            width: 100%;
            height:100%;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
            <div id="emoji-grid"></div>
        `;
    }
 
    static get observedAttributes() { 
        return ['width', 'height', 'size', 'emoji'];
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
        this.grid = this.shadowRoot.querySelector('#emoji-grid');
    }
  
    setup() {
        this.observedMessages = ['message'];
        this.grid.style['background-image'] = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='${this.height}px' width='${this.width}px'><text x='0' y='${this.y}px'  font-size='${this.size}px'>${this.emoji}</text></svg>")`;
        //this.subscribe(this.observedMessages);   
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // Note that size needs to come after emoji
        if (name.includes('size')) {
            this.size = Number(newValue);
            this.y = this.size - (this.size / 8);
            this.width = this.size * this.emoji.length / 2;
            this.height = this.size ;
        }        
        if (name.includes('emoji')) {
            this.emoji = newValue;
        }
    }
}

customElements.define('ravel-emoji-grid', RavelEmojiGrid);
