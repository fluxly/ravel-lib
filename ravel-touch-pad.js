import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';

export default class RavelTouchPad extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #touch-handle {
            position: absolute;
            font-size:12px;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="touch-pad-container">
        <ravel-emoji-grid emoji="⬛️" size="80"></ravel-emoji-grid>
        <div id="touch-handle">🟡</div>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['background', 'touch-x-list', 'touch-y-list', "touch-points", 'width', 'height', 'x', 'y'];
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
        this.container = this.shadowRoot.querySelector('#touch-pad-container');
        this.handle = this.shadowRoot.querySelector('#touch-handle');
        this.width = 160;
        this.height = 160;
    }
  
    setup() {
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);   
        this.container.style.width = `${this.width}`; 
        this.container.style.height = `${this.height}`;
        this.centerX = this.handle.getBoundingClientRect().left;
        this.centerY = this.handle.getBoundingClientRect().top;
        this.containerX = this.container.getBoundingClientRect().left;
        this.containerY = this.container.getBoundingClientRect().top;
        this.updateValue();
        this.addEventListener('mousedown', (e) => { 
            console.log("mousedown");
            e.preventDefault();
            this.startX = e.clientX;
            this.startY = e.clientY;
            this.handle.style.left = e.clientX - this.centerX - 6;
            this.handle.style.top = e.clientY - this.centerY - 6;
            this.mouseMoveCallback = this.dragElement.bind(this); 
            this.mouseUpCallback = this.endDragElement.bind(this);
            document.addEventListener('mousemove', this.mouseMoveCallback);
            document.addEventListener('mouseup', this.mouseUpCallback);
           // document.addEventListener('mouseout', this.mouseUpCallback);
            document.addEventListener('mouseleave', this.mouseUpCallback);
  	  });
    }
    
    dragElement(e) {
        e.preventDefault();
        let x = this.startX - e.clientX;
        let y = this.startY - e.clientY;
        this.startX = e.clientX;
        this.startY = e.clientY;
        let newX = (this.handle.offsetLeft - x);
        let newY = (this.handle.offsetTop - y);
        if (this.inBounds(newX, newY)) {
            this.handle.style.left = newX + 'px';
            this.handle.style.top = newY + 'px';
        }
     }

    endDragElement() {
        //console.log("mouseout");
        document.removeEventListener('mousemove', this.mouseMoveCallback);
        document.removeEventListener('mouseup', this.mouseUpCallback);
     //   document.removeEventListener('mouseout', this.mouseUpCallback);
        document.removeEventListener('mouseleave', this.mouseUpCallback);
    }
     
    updateValue() {
       /* if (this.orientation === 'horizontal') {
            this.value = (this.handleX - (this.containerX + this.padding * 2)) / this.length;
        } else {
            this.value = ((this.containerY + this.padding * 2) - this.handleY) / this.length;
        }
        console.log(this.value);*/
    }
    
	inBounds(x1, y1) {
        return true; // FIXME
        console.log(x1 + ">" + this.containerX );
		if ((x1 < (this.containerX + this.width)) && (x1 > this.containerX) &&
			(y1 < (this.containerY + this.height)) && (y1 > this.containerY)) {
			return true;
		} else {
			return false;
		}
	}
    
    teardown() {
       // this.unsubscribe(this.observedMessages);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.checkCommonAttributes(name, oldValue, newValue);
        if (name.includes('width')) {
            this.width = newValue;
        }
        if (name.includes('height')) {
            this.height = newValue;
        }
    }
}

customElements.define('ravel-touch-pad', RavelTouchPad);
