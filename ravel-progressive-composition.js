import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelProgressiveComposition extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #composition-grid {
            display: grid;
            grid: auto / auto auto auto;
        }
        .grid-item {
           width:140px;
           height:100px;
            border:1px solid #eeeeee;
            font-size:18px;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="container">
         <div id="composition-grid">
         </div>
         <ravel-slider size="20" color="red" length="300" y="90%"></ravel-slider>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['source'];
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
        this.grid = this.shadowRoot.querySelector('#composition-grid');
        this.performers = 20;
        this.performerIcon = [];
        this.performerSection = [];
        this.sections = 12;
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);  
        for (let i = 0; i < this.sections; i ++) {
            this.grid.innerHTML += `
            <div id="composition-grid-item-${i}" class="grid-item"></div>
            `;
        } 
        for (let i = 0; i < this.sections; i ++) {
            this.shadowRoot.querySelector(`#composition-grid-item-${i}`).addEventListener('click', (evt) => {
                console.log(`Clicked ${i}`);
                this.moveRandomPerformer(i);
            });
        } 
        for (let i = 0; i < this.performers; i ++) {
            let icon = RavelEmoji.getRandomEmoji();
            this.performerIcon.push(icon);
            this.performerSection.push(0);
            this.shadowRoot.querySelector(`#composition-grid-item-0`).innerHTML += `
            <span id="performer-${i}">${icon}</span>
            `;
        }
    }
    
    moveRandomPerformer(section) {
        let performersInSection = [];
        for (let i = 0; i < this.performerSection.length; i++) {
            if (this.performerSection[i] === section) {
                performersInSection.push(i);
            }
        }
        if (performersInSection.length > 0) {
            let n = performersInSection[Math.floor(Math.random() * performersInSection.length)];
            if (this.performerSection[n] < (this.sections -1)) {
                this.performerSection[n]++;
                let p = this.shadowRoot.querySelector(`#performer-${n}`);
                console.log(p);
                this.shadowRoot.querySelector(`#composition-grid-item-${this.performerSection[n]}`).appendChild(p);
            } 
        }
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
