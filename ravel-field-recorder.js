import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelFieldRecorder extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #sample-icon {
            font-size: 80px;
            cursor:pointer;
        }
        #container {
           
            font-size: 50px;
            width: 400px;
            display: flex;
            flex-direction: column;
            height: 550px;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: #000000AA;
            box-shadow: 0px 0px 10px 10px rgba(255, 255, 255,0.2);
             display:none;
        }
        .selected {
         box-shadow: 0px 0px 20px 20px rgba(255, 255, 0, 0.5);
     }
        #sample-preview {
            margin-top: -45px;
            font-size: 100px;
            text-align:center;
        }
        #play-control {
            transform: rotate(270deg);
        }
        #controls-wrapper {
            
        }
        #close-control {
             cursor:pointer;
        }
        #controls-wrapper {
            margin: 0px 80px 20px 80px;
            font-size: 50px;
            display:flex;
            justify-content: space-around;
        }
        #recordings-area {
            display: grid;
            grid: auto / auto auto auto auto auto;
            grid-gap: 4px;
            font-size: 60px;
            justify-items: center;
        }
        
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="sample-icon" data-src="recording-0">🐶</div>
        <div id="container">
        <div id="control-area">
        <div id="close-control">🍩</div>
        <div id="sample-preview">🐶</div>
        <div id="controls-wrapper">
            <div id="play-control">💚</div>
            <div id="record-control">🔴</div>
        </div>
        </div>
        <div id="recordings-area">
        </div>
        </div>
        `;
    }
    
 //🟩🟥
    
    static get observedAttributes() { 
        return ['selected'];
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
        this.recordings = this.shadowRoot.querySelector('#recordings-area');
        this.icon = this.shadowRoot.querySelector('#sample-icon');
        this.close = this.shadowRoot.querySelector('#close-control');
        this.preview = this.shadowRoot.querySelector(`#sample-preview`);
        this.recordings.innerHTML = '';
        this.selected = 'recording-0';
        this.icon.addEventListener('click', (evt) => {
            this.container.style.display = 'flex';
            this.selected = evt.target.getAttribute('data-src');
        });
        this.close.addEventListener('click', (evt) => {
            this.container.style.display = 'none';
        });
        for (let i = 0; i < 20; i++) {
            let emoji = RavelEmoji.animals[i];
            this.recordings.innerHTML += `<span id="recording-${i}">${emoji}</span>`;
        }
        for (let i = 0; i < 20; i++) {
            this.shadowRoot.querySelector(`#recording-${i}`).addEventListener('click', (evt) => {
                this.icon.innerHTML = this.shadowRoot.querySelector(`#recording-${i}`).innerHTML;
                this.preview.innerHTML = this.shadowRoot.querySelector(`#recording-${i}`).innerHTML;
                this.selected = evt.target.id;
                this.icon.setAttribute('data-src', this.selected);
            });
        }

    }
  
    setup() {
        this.observedMessages = ['message'];
        this.icon.innerHTML = this.shadowRoot.querySelector(`${this.selected}`).innerHTML;
        this.preview.innerHTML = this.shadowRoot.querySelector(`${this.selected}`).innerHTML;
        //this.subscribe(this.observedMessages);   
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name === 'selected') {
            this.selected = newValue;
        }
    }
}

customElements.define('ravel-field-recorder', RavelFieldRecorder);
