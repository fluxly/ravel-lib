import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';

export default class RavelLed extends RavelElement {
    static get localStyles() {
        return `
        <style>
            #led-container {
                display: inline-block;
            }
            .green-glow {
                box-shadow: 0px 20px 105px 100px rgba(45,255,196,0.9);
            }
            .red-glow {
                box-shadow: 0px 20px 105px 100px rgba(255,0,0,0.9);
            }
            .yellow-glow {
                box-shadow: 0px 20px 105px 100px rgba(255,255,0,0.9);
            }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="led-container"></div>
        `;
    }
 
    static get observedAttributes() { 
        return ['led-id', 'color', 'state', 'size', 'x', 'y', 'blink-rate', 'states', 'state-icons', 'state-signals', 'glow']; 
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
        this.container = this.shadowRoot.querySelector('#led-container');
        this.ledId = 0;
        this.size = '50';
        this.states = 2;
        this.state = 0;
        this.stateDir = 1;
        this.glow = 'green';
        this.stateIcons = [ '🟢', '⚫️' ];
        this.stateSignals = [ `led-${this.ledId}-off`, `led-${this.ledId}-on` ];
    }
  
    setup() {
        this.observedMessages = ['toggle'];
        this.subscribe(this.observedMessages);
        this.container.style['font-size'] = this.size + 'px';
       
        for (let i = 0; i < this.states; i++) {
            let span = document.createElement('div');
            span.id = `state-${i}`;
            span.classList.add('led');
            span.style.display = 'none';
            span.style['border-radius'] = this.size + 'px';
            span.style['height'] = '0px';
            span.innerHTML += this.stateIcons[i];
            this.container.appendChild(span);
        }
        this.shadowRoot.querySelector(`#state-1`).style.opacity = '0.25'; 
        this.shadowRoot.querySelector(`#state-1`).style['margin-left'] = -this.size + 'px'; 
        this.shadowRoot.querySelector(`#state-${this.state}`).style.display = 'inline-block'; 
        this.shadowRoot.querySelector(`#state-${this.state}`).classList.add(this.glow + '-glow');
        this.addEventListener('click', () => { this.handleToggle(); });
        this.addEventListener('toggle', () => { this.handleToggle(); });
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }
    
    handleToggle() {
        if (this.state !== 0) {
            this.shadowRoot.querySelector(`#state-1`).style.display = 'none'; 
            this.shadowRoot.querySelector(`#state-0`).classList.add(this.glow + '-glow');
        } else {
            this.shadowRoot.querySelector(`#state-0`).classList.remove(this.glow + '-glow');
        }
        if ((this.state === (this.states - 1)) || ((this.state === 0) && (this.stateDir === -1))) {
            this.stateDir = this.stateDir * -1;
        }
        this.state =  this.state + this.stateDir;
        this.shadowRoot.querySelector(`#state-${this.state}`).style.display = 'inline-block'; 
        this.sendMessage(this.stateSignals[this.state]);
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
        if (name.includes('led-id')) {
            this.ledId = newValue;
        }
        if (name.includes('color')) {
            this.color = newValue;
        }
        if (name === 'state') {
            this.state = newValue;
        }
        if (name === 'blink-rate') {
            this.blinkRate = newValue;
        }
        if (name === 'states') {
            this.states = parseInt(newValue, 10);
        }
        if (name === 'state-icons') {
            this.stateIcons = newValue.split(',');
        }
        if (name === 'glow') {
            this.glow = newValue;
        }
        if (name.includes('state-signals')) {
            this.stateSignals = newValue.split(',');
        }
    }
}

customElements.define('ravel-led', RavelLed);
