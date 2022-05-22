import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';

export default class RavelProgressiveComposition extends RavelElement {
    static get localStyles() {
        return `
        <style>
        </style>
        `;
    }
  
    static get html() { 
        return `
        `;
    }
 
    static get observedAttributes() { 
        return ['attribute'];
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
        // e.g. this.container = this.shadowRoot.querySelector('#container');
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);   
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('attribute')) {
            // Do something
        }
    }
}

customElements.define('ravel-progressive-composition', RavelProgressiveComposition);
