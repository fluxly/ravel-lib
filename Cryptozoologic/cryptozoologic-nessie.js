
export default class CryptozoologicNessie extends HTMLElement {
    static get localStyles() {
        return `
        <style>
        #pot-container {
            display: grid;
            grid: 140px 140px 140px/ 50% 50%;
            margin-bottom: 30px;
        }
        #switch-container {
            display: grid;
            grid: 40px 40px 40px/ 100%;
        }
        .cell {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `

        <div id="slider-container">
       <ravel-slider class="cell" size="50" sliders="1" length="450"></ravel-slider>
        <ravel-slider class="cell" size="50" sliders="1" length="450"></ravel-slider>
        </div>
        <div id="pot-container">
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
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
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);  
        this.toneSetup(); 
    }
    
    toneSetup() {
        this.synthA = new Tone.FMSynth().toDestination();
        this.synthB = new Tone.AMSynth().toDestination();
        //play a note every quarter-note
        this.loopA = new Tone.Loop(time => {
        	this.synthA.triggerAttackRelease("C2", "8n", time);
        }, "4n").start(0);
        //play another note every off quarter-note, by starting it "8n"
        this.loopB = new Tone.Loop(time => {
        	this.synthB.triggerAttackRelease("C4", "8n", time);
        }, "4n").start("8n");
        // the loops start when the Transport is started

        Tone.Transport.start();
        // ramp up to 800 bpm over 10 seconds
        Tone.Transport.bpm.value = 60;
        Tone.Transport.bpm.rampTo(800, 10);
        this.toneWaveform = new Tone.Waveform();
        this.toneWaveform.size = 512;
        this.synthA.connect(this.toneWaveform);
    }
    
    teardown() {
        console.log("teardown");
        // this.unsubscribe(this.observedMessages);
        Tone.Transport.stop();
        this.loopA.dispose();
        this.loopB.dispose();
        this.synthA.dispose();
        this.synthB.dispose();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('attribute')) {
            // Do something
        }
    }
}

customElements.define('cryptozoologic-nessie', CryptozoologicNessie);
