
export default class CryptozoologicIrishYeti extends HTMLElement {
    static get localStyles() {
        return `
        <style>
        #pot-container {
            display: grid;
            grid: 100px/ 25% 25% 25% 25%;;
            margin-bottom: 10px;
        }
        #slider-container {
            width: 100%;
            display: flex;
            flex-direction:column;
            justify-content: center;
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
        <ravel-pot size="50" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="50" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="50" class="cell" marker="white-circle"></ravel-pot>
        <ravel-pot size="50" class="cell" marker="white-circle"></ravel-pot>
        </div>
        <div id="slider-container">
        <ravel-slider class="cell" size="50" sliders="2"></ravel-slider>
        <ravel-sequence class="cell" icon-active="⚪️" icon-inactive="⬛️" cells="20" size="20"></ravel-sequence>
        <ravel-slider class="cell" size="50" sliders="2" length="450"></ravel-slider>
        <ravel-sequence class="cell" icon-active="⚪️" icon-inactive="⬛️" cells="20" size="20"></ravel-sequence>
        <ravel-slider class="cell" size="50" sliders="2" length="450"></ravel-slider>
        <ravel-sequence class="cell" icon-active="⚪️" icon-inactive="⬛️" icon-active="⚪️" icon-inactive="⬛️" cells="20" size="20"></ravel-sequence>
        <ravel-slider class="cell" size="50" sliders="2" length="450"></ravel-slider>
        <ravel-sequence class="cell"  icon-active="⚪️" icon-inactive="⬛️" cells="20" size="20"></ravel-sequence>

        </div>
        <div id="switch-container">
        <ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="36"></ravel-switch>
    	<ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="36"></ravel-switch>
        <ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="36"></ravel-switch>
    	<ravel-switch states="4" class="cell" state-signals="one,two,three,four" size="36"></ravel-switch>
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

customElements.define('cryptozoologic-irish-yeti', CryptozoologicIrishYeti);
