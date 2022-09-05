
export default class CryptozoologicFluxly extends HTMLElement {
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
        #switch-container {
            position: absolute;
            bottom: 5%;
            left: 50%;

        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <ravel-switch states="2" state-signals="one,two" orientation="horizontal" x="42%" y="95%" size="32"></ravel-switch>
    <ravel-physics-world>
	<ravel-fluxum  id="fluxum-1" class="fluxum" size="80" x="100" y="300" color="green"></ravel-fluxum>
    <ravel-fluxum  id="fluxum-2" class="fluxum" size="50" x="300" y="300" color="yellow"></ravel-fluxum>
	<ravel-fluxum  id="fluxum-3" class="fluxum" size="50" x="300" y="300" color="red"></ravel-fluxum>
    </ravel-physics-world>
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

customElements.define('cryptozoologic-fluxly', CryptozoologicFluxly);
