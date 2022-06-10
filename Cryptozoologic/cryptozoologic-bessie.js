
export default class CryptozoologicBessie extends HTMLElement {
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

        <div id="switch-container">
       <ravel-slider class="cell" size="50" sliders="1" length="450"></ravel-slider>
        <ravel-slider class="cell" size="50" sliders="1" length="450"></ravel-slider>
        </div>
        <div id="pot-container">
        <ravel-pot size="90" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="90" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="90" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="90" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="90" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="90" class="cell" marker="white-circle"></ravel-pot>
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

customElements.define('cryptozoologic-bessie', CryptozoologicBessie);
