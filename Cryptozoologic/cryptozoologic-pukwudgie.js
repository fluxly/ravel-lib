
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

customElements.define('cryptozoologic-pukwudgie', CryptozoologicPukwudgie);
