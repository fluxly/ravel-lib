import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelSwitch extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #switch-container {
            display:inline-block;
            cursor:pointer;
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
        this.size = '50';
        this.orientation = 'horizontal';
        this.states = 2;
        this.state = 0;
        this.stateDir = 1;
        this.stateIcons = [ '⛔️', '🟢' ];
        this.stateSignals = [ `switch-${this.switchId}-off`, `switch-${this.switchId}-on` ];
    }
  
    setup() {
        this.observedMessages = ['toggle'];
        this.subscribe(this.observedMessages);
        this.container.style['font-size'] = `${this.size}px`;
        if (this.stateIcons.length !== this.states.length) {
            // Not enough icons in the attributes; generate
            this.stateIcons = [];
            for (let i = 0; i < this.states; i++) {
                this.stateIcons.push(RavelEmoji.getRandomEmoji());
            }
        }
        if (this.orientation === 'horizontal') {
            this.container.style['border-bottom'] = '3px dotted #aaaaaa';
            console.log(`${this.size / 2}px`);
            this.container.style['height'] = `${this.size / 2}px`;
        }
        if (this.orientation === 'vertical') {
            this.container.style['border-left'] = '3px dotted #aaaaaa';
            console.log(`${this.size / 2}px`);
            this.container.style['width'] = `${this.size / 2}px`;
        }
        console.log(this.stateIcons);
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
        this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name.includes('size')) {
            this.size = Number(newValue);
        }
        if (name === 'x') {
            this.container.style.position = 'absolute';
            this.x = newValue;
            this.container.style.left = newValue;
        }
        if (name === 'y') {
            this.container.style.position = 'absolute';
            this.y = newValue;
            this.container.style.top = newValue;
        }
        if (name === 'orientation') {
            this.orientation = newValue;
        }
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





