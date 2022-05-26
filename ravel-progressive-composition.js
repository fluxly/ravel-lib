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
            font-size:18px;
        }
        #auto-play {
            position:absolute;
            right:20px;
            top: 80%;
            font-size: 80px;
        }
        #auto-play-indicator {
            margin-bottom: -32px;
            margin-left:30px;
            font-size:24px;
        }
        @-webkit-keyframes pulse {
          to {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
        }
        @keyframes pulse {
          to {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
        }
        .pulse {
          display: inline-block;
          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0);
         -webkit-animation-name: pulse;
          animation-name: pulse;
          -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-direction: alternate;
          animation-direction: alternate;
        }
        .scale-out-center {
        	-webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        	        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        }
        @-webkit-keyframes scale-out-center {
          0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 1;
          }
          100% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
          }
        }
        @keyframes scale-out-center {
          0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 1;
          }
          100% {
            -webkit-transform: scale(0);
                    transform: scale(0);
            opacity: 1;
          }
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
         <div id="auto-play">
        <div id="auto-play-indicator">⚫️</div>
        🐐
        </div>
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
        this.autoplay = false;
        this.autoplayTimer = null;
        this.maxSection = 0;
        this.minSection = 0;
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
        this.shadowRoot.querySelector(`#auto-play`).addEventListener('click', (evt) => {
            this.autoplay = !this.autoplay;
            if (this.autoplay) {
                this.autoPlayTimer = setInterval(() => {
                        this.moveRandomPerformer(this.performerSection[Math.floor(Math.random() * this.performers)]);
                    },
                    200
                );
                this.shadowRoot.querySelector(`#auto-play`).classList.add('pulse');
            } else {
                if (this.autoPlayTimer) clearInterval(this.autoPlayTimer);
                this.shadowRoot.querySelector(`#auto-play`).classList.remove('pulse');
            }
        });
        
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
                this.shadowRoot.querySelector(`#auto-play-indicator`).innerText = this.performerIcon[n];
                console.log(p);
                this.shadowRoot.querySelector(`#composition-grid-item-${this.performerSection[n]}`).appendChild(p);
                if (this.performerSection[n] > this.maxSection) this.maxSection = this.performerSection[n];
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
