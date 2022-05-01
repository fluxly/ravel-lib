import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';

export default class RavelSwitch extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #switch-container {
            display:inline-block;
            border: 3px solid #aaaaaa;
            border-radius: 20px;
            padding: 0PX 10px;
            cursor:pointer;background-color:#eeeeee;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="switch-container"></div>
        `;
    }
 
    static get observedAttributes() { 
        return ['switch-id', 'type', 'size', 'x', 'y', 'orientation', 'states', 'state-icons', 'state-signals'];
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
        this.container = this.shadowRoot.querySelector('#switch-container');
        this.switchId = 0;
        this.type = 'toggle';
        this.size = '50px';
        this.orientation = 'horizontal';
        this.states = 2;
        this.state = 1;
        this.stateDir = 1;
        this.stateIcons = [ '⛔️', '🟢' ];
        this.stateSignals = [ `switch-${this.switchId}-off`, `switch-${this.switchId}-on` ];
    }
  
    setup() {
        this.observedMessages = ['toggle'];
        this.subscribe(this.observedMessages);
        this.container.style['font-size'] = this.size;
        this.container.style['border-radius'] = this.size;
        for (let i = 0; i < this.states; i++) {
            let span = document.createElement('span');
            span.id = `state-${i}`;
            span.style.visibility = 'hidden';
            span.innerHTML += this.stateIcons[i];
            this.container.appendChild(span);
            if (this.orientation === 'vertical') this.container.appendChild(document.createElement('br'));
        }
        this.shadowRoot.querySelector(`#state-${this.state}`).style.visibility = 'visible'; 
        this.addEventListener('click', () => { this.handleToggle(); });
        this.addEventListener('toggle', () => { this.handleToggle(); });
    }
    
    handleToggle() {
        this.shadowRoot.querySelector(`#state-${this.state}`).style.visibility = 'hidden'; 
        if ((this.state === (this.states - 1)) || ((this.state === 0) && (this.stateDir === -1))) {
            this.stateDir = this.stateDir * -1;
        }
        this.state =  this.state + this.stateDir;
        this.shadowRoot.querySelector(`#state-${this.state}`).style.visibility = 'visible'; 
        this.sendMessage(this.stateSignals[this.state]);
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('switch-id')) {
            this.switchId = newValue;
        }
        if (name.includes('type')) {
            this.type = newValue;
        }
        if (name === 'states') {
            this.states = parseInt(newValue, 10);
        }
        if (name === 'state-icons') {
            this.stateIcons = newValue.split(',');
        }
        if (name.includes('state-signals')) {
            this.stateSignals = newValue.split(',');
        }
    }
}

customElements.define('ravel-switch', RavelSwitch);





