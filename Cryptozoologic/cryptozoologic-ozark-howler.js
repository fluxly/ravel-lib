
export default class CryptozoologicOzarkHowler extends HTMLElement {
    static get localStyles() {
        return `
        <style>
        #container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 30px;
        }
        .row {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .cell {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .slider-container {
            display:flex;
            flex-direction:column;
            align-items: center;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="container">
        <div id="granular-0" class="row">
        <ravel-field-recorder selected="#recording-0"></ravel-field-recorder>
        <div class="slider-container">
        <ravel-slider id="slider-0-0" size="30" length="200"></ravel-slider>
        <ravel-slider id="slider-0-1" size="30" length="200"></ravel-slider>
        <ravel-slider id="slider-0-2" size="30" length="200"></ravel-slider>
        </div>
        <ravel-switch states="2" id="switch-0" switch-id="0" state-icons="⛔️,🟢" size="60"></ravel-switch>
        </div>
        <div id="granular-1" class="row">
        <ravel-field-recorder selected="#recording-1"></ravel-field-recorder>
        <div class="slider-container">
        <ravel-slider id="slider-1-0" size="30" length="200"></ravel-slider>
        <ravel-slider id="slider-1-1" size="30" length="200"></ravel-slider>
        <ravel-slider id="slider-1-2" size="30" length="200"></ravel-slider>
        </div>
        <ravel-switch states="2" id="switch-1" switch-id="1" state-icons="⛔️,🟢" size="60"></ravel-switch>
        </div>
        <div id="granular-2" class="row">
        <ravel-field-recorder selected="#recording-2"></ravel-field-recorder>
        <div class="slider-container">
        <ravel-slider id="slider-2-0" size="30" length="200"></ravel-slider>
        <ravel-slider id="slider-2-1" size="30" length="200"></ravel-slider>
        <ravel-slider id="slider-2-2" size="30" length="200"></ravel-slider>
        </div>
        <ravel-switch states="2" id="switch-2" switch-id="2" state-icons="⛔️,🟢" size="60"></ravel-switch>
        </div>
        <div class="row">
        <ravel-pot size="100" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" marker="white-circle"></ravel-pot>
        </div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['attribute'];
    }

    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = this.constructor.localStyles
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
		this.player0 = new Tone.GrainPlayer({
			url: "wav/sample0.wav",
			loop: true,
			grainSize: 0.001,
			overlap: 0.05,
            playbackRate: 0.2
		}).toDestination();
        this.shadowRoot.querySelector("#switch-0").addEventListener("on", () => { console.log("play!"); this.player0.start();});
		this.shadowRoot.querySelector("#switch-0").addEventListener("off", () => { console.log("stop!"); this.player0.stop(); });
       /* this.shadowRoot.querySelector("#slider-0-0").addEventListener("slider-change", (evt) => {
            console.log(evt.detail.value1);  
            this.player0.grainSize = Number(evt.detail.value1) * 0.1;
        });
        this.shadowRoot.querySelector("#slider-0-1").addEventListener("slider-change", (evt) => { 
            console.log(evt.detail.value1); 
            this.player0.overlap = Number(evt.detail.value1) * 0.05;
        });
        this.shadowRoot.querySelector("#slider-0-2").addEventListener("slider-change", (evt) => { 
            console.log(evt.detail.value1); 
            this.player0.playbackRate = Number(evt.detail.value1);
        });
           */
		this.player1 = new Tone.GrainPlayer({
			url: "wav/sample1.wav",
			loop: true,
			grainSize: 0.01,
			overlap: 0.05,
            playbackRate: 0.2
		}).toDestination();
        this.shadowRoot.querySelector("#switch-1").addEventListener("on", () => { console.log("play!"); this.player1.start();});
		this.shadowRoot.querySelector("#switch-1").addEventListener("off", () => { console.log("stop!"); this.player1.stop(); });
        
		this.player2 = new Tone.GrainPlayer({
			url: "wav/sample2.wav",
			loop: true,
			grainSize: 0.001,
			overlap: 0.05,
            playbackRate: 0.2
		}).toDestination();
        this.shadowRoot.querySelector("#switch-2").addEventListener("on", () => { console.log("play!"); this.player2.start();});
		this.shadowRoot.querySelector("#switch-2").addEventListener("off", () => { console.log("stop!"); this.player2.stop(); });
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);   
    }
    
    teardown() {
        this.player0.stop();
        this.player1.stop();
        this.player2.stop();
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('attribute')) {
            // Do something
        }
    }
}

customElements.define('cryptozoologic-ozark-howler', CryptozoologicOzarkHowler);
