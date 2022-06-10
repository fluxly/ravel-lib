
export default class CryptozoologicPukwudgie extends HTMLElement {
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
            grid: 40px 40px 40px/ 50% 50%;
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
        <div id="pot-container">
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="100" class="cell" marker="white-circle"></ravel-pot>
        </div>
        <div id="switch-container">
        <ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="24"></ravel-switch>
    	<ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="24"></ravel-switch>
        <ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="24"></ravel-switch>
    	<ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="24"></ravel-switch>
        <ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="24"></ravel-switch>
    	<ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="24"></ravel-switch>
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
        this.background = new Tone.Player("./wav/puckwudgie/background.wav").toDestination();
        Tone.loaded().then(() => {
        	this.background.start();
            this.background.loop = true;
        });
        this.sampler = new Tone.Sampler({
        	urls: {
        		"F3": "wav/puckwudgie/cello0.wav",
        		"Ab2": "wav/puckwudgie/cello1.wav",
        		"C3": "wav/puckwudgie/cello2.wav",
        		"Eb3": "wav/puckwudgie/cello3.wav",
        		"F2": "wav/puckwudgie/cello4.wav",
        		"Ab3": "wav/puckwudgie/cello5.wav"
                /*"F4": "mp3/puckwudgie/viola0.mp3",
        		"Ab3": "mp3/puckwudgie/viola1.mp3",
        		"C4": "mp3/puckwudgie/viola2.mp3",
        		"Eb3": "mp3/puckwudgie/viola3.mp3",
        		"F3": "mp3/puckwudgie/viola4.mp3",
        		"Ab3": "mp3/puckwudgie/viola5.mp3",
        		"F3": "mp3/puckwudgie/horn0.mp3",
        		"Ab2": "mp3/puckwudgie/horn1.mp3",
        		"C3": "mp3/puckwudgie/horn2.mp3",
        		"Eb3": "mp3/puckwudgie/horn3.mp3",
        		"F2": "mp3/puckwudgie/horn4.mp3",
        		"Ab3": "mp3/puckwudgie/horn5.mp3",*/
        	},
        	release: 1,
        	baseUrl: "./",
        }).toDestination();
        
        this.baseTime = 10;
        this.baseIncrement = 0.1;
        
        Tone.loaded().then(() => {
            this.pannerA = new Tone.Panner(-1).toDestination();
            this.pannerB = new Tone.Panner(-1).toDestination();
            this.pannerC = new Tone.Panner(-1).toDestination();
            this.loopA = new Tone.Loop(time => {
            	this.sampler.triggerAttackRelease("F3", `${this.baseTime}s`, time);
            }, this.baseTime).start(0);
            //this.loopA.connect(this.panner)
            this.loopB = new Tone.Loop(time => {
            	this.sampler.triggerAttackRelease("Ab2", `${this.baseTime}s`, time);
            }, this.baseTime + 0.1).start(0);
            this.loopC = new Tone.Loop(time => {
            	this.sampler.triggerAttackRelease("C3", `${this.baseTime}s`, time);
            }, this.baseTime + 0.2).start(0);
            this.loopD = new Tone.Loop(time => {
            	this.sampler.triggerAttackRelease("Eb3", `${this.baseTime}s`, time);
            }, this.baseTime + 0.3).start(0);
            this.loopE = new Tone.Loop(time => {
            	this.sampler.triggerAttackRelease("F2", `${this.baseTime}s`, time);
            }, this.baseTime + 0.4).start(0);
            this.loopF = new Tone.Loop(time => {
            	this.sampler.triggerAttackRelease("Ab3", `${this.baseTime}s`, time);
            }, this.baseTime + 0.5).start(0);
            Tone.Transport.start();
        });
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
       Tone.Transport.stop();
       this.background.dispose();
       this.sampler.dispose();
       this.loopA.dispose();
       this.loopB.dispose();
       this.loopC.dispose();
       this.loopD.dispose();
       this.loopE.dispose();
       this.loopF.dispose();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('attribute')) {
            // Do something
        }
    }
}

customElements.define('cryptozoologic-pukwudgie', CryptozoologicPukwudgie);
