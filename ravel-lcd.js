import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';

export default class RavelLCD extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #frame, #screen {
            display: inline-block;
            font-size: 120px;
        }
        #frame {
            line-height:120px;
        }
        #screen {
            position: relative;
            top:-8px;
            font-size: 100px;
            margin-left: -110px;
        }
        .green-glow {
            box-shadow: 0px 20px 10px 10px rgba(45,255,196,0.9);
        }
        #text {
            position: relative;
            left: -90px;
            top: -70px;
            display: inline-block;
            width: 80px;
            height: 70px;
            font-family: 'DS-Digital-Italic';
            font-size: 24px;
            color: #333333EE;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="lcd-container">
        <div id="frame">⬛️</div><div id="screen">🟩</div><div id="text">000</div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['lcd-id', 'color', 'size', 'x', 'y', 'scale', 'orientation', 'text'];
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
        this.container = this.shadowRoot.querySelector('#lcd-container');
    }
  
    setup() {
        this.observedMessages = ['lcd-text'];
        this.subscribe(this.observedMessages);   
    }
    
    teardown() {
        this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
    
    }
}

customElements.define('ravel-lcd', RavelLCD);
