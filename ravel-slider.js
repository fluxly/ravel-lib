import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';
import { RavelEmoji } from './RavelEmoji.js';

export default class RavelSlider extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #slider-container {
          width: 100%; 
        }

        /* The slider itself */
        .slider-1, .slider-2 {
              -webkit-appearance: none;  /* Override default CSS styles */
              appearance: none;
              width: 100%; /* Full-width */
              height: 0px; /* Specified height */
              background: #000000; /* Grey background */
              border-bottom:3px dotted #aaaaaa;
              outline: none; /* Remove outline */
              pointer-events: none;
          }
          .slider-2 {
              display:none;
          }
          .slider-1::-webkit-slider-thumb {
              pointer-events: auto;
            -webkit-appearance: none;
            appearance: none;
            width: 40px;
            height: 40px;
            border: 0;
            background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjQwIgogICBoZWlnaHQ9IjQwIgogICB2aWV3Qm94PSIwIDAgNDAgNDAiCiAgIGZpbGw9Im5vbmUiCiAgIHZlcnNpb249IjEuMSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4NDM2IiAvPgogCiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICB4PSIwIgogICAgIHk9IjAiCiAgICAgaWQ9InRleHQ5NjQ2Ij48dHNwYW4KICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICBpZD0idHNwYW45NjQ0IgogICAgICAgeD0iMCIKICAgICAgIHk9IjM2IgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZTozNnB4Ij7wn6ShPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo='); 
            cursor: pointer;
          }
          .slider-1::-moz-range-thumb {
              pointer-events: auto;
            width: 40px;
            height: 40px;
            border: 0;
            background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjQwIgogICBoZWlnaHQ9IjQwIgogICB2aWV3Qm94PSIwIDAgNDAgNDAiCiAgIGZpbGw9Im5vbmUiCiAgIHZlcnNpb249IjEuMSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4NDM2IiAvPgogCiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICB4PSIwIgogICAgIHk9IjAiCiAgICAgaWQ9InRleHQ5NjQ2Ij48dHNwYW4KICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICBpZD0idHNwYW45NjQ0IgogICAgICAgeD0iMCIKICAgICAgIHk9IjM2IgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZTozNnB4Ij7wn6ShPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo='); 
            cursor: pointer;
          }
          .slider-2::-webkit-slider-thumb {
              pointer-events: auto;
            -webkit-appearance: none;
            appearance: none;
            width: 40px;
            height: 40px;
            border: 0;
            background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjQwIgogICBoZWlnaHQ9IjQwIgogICB2aWV3Qm94PSIwIDAgNDAgNDAiCiAgIGZpbGw9Im5vbmUiCiAgIHZlcnNpb249IjEuMSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4NDM2IiAvPgogCiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICB4PSIwIgogICAgIHk9IjAiCiAgICAgaWQ9InRleHQ5NjQ2Ij48dHNwYW4KICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICBpZD0idHNwYW45NjQ0IgogICAgICAgeD0iMCIKICAgICAgIHk9IjM2IgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZTozNnB4Ij7wn6SWPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo='); 
            cursor: pointer;
          }
          .slider-2::-moz-range-thumb {
              pointer-events: auto;
            width: 40px;
            height: 40px;
            border: 0;
            background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjQwIgogICBoZWlnaHQ9IjQwIgogICB2aWV3Qm94PSIwIDAgNDAgNDAiCiAgIGZpbGw9Im5vbmUiCiAgIHZlcnNpb249IjEuMSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4NDM2IiAvPgogCiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICB4PSIwIgogICAgIHk9IjAiCiAgICAgaWQ9InRleHQ5NjQ2Ij48dHNwYW4KICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICBpZD0idHNwYW45NjQ0IgogICAgICAgeD0iMCIKICAgICAgIHk9IjM2IgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZTozNnB4Ij7wn6SWPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo='); 
            cursor: pointer;
          }
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
    <div id="slider-container">
        <input type="range" min=0 max=1 step=.01 value="0" class="slider-1" id="handle-1">
        <input type="range" min=0 max=1 step=.01 value="1" class="slider-2" id="handle-2">
    </div>
        `;
    }
 
    static get observedAttributes() { 
       return ['slider-id', 'sliders', 'min', 'max', 'size', 'orientation', 'value', 'value-2', 'icon', 'signals'];
    }

    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML =  this.constructor.localStyles
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
        this.container = this.shadowRoot.querySelector('#slider-container');
        this.handle = this.shadowRoot.querySelector('#handle-1');
        this.handle2 = this.shadowRoot.querySelector('#handle-2');
        this.handle2.style['border-bottom'] = 'none';
        this.handle2.style['margin-top'] = '-4px';
       
        this.sliderId = 0;
        this.size = 32;
        this.orientation = 'horizontal';
        this.value = 0;
        this.value2 = 1.0;
        this.sliders = 1;
        this.min = 0;
        this.max = 1.0;
        this.step = 0.01;
    }
  
    setup() {
        this.observedMessages = ['message'];
        this.container.style['font-size'] = `${this.size}px`;
        this.handle.value = this.value;
        this.handle2.value = this.value2;
        if (this.orientation === 'horizontal') {
           this.container.style['height'] = `${this.size}px`;
           this.container.style['margin-top'] = `${this.size}px`
    
        } else {
           this.container.style['width'] = `${this.size}px`;
           this.container.style['margin-left'] = `${this.size}px`
        
        }
        if (this.sliders === 2) {
            this.handle2.style.display = 'block';
        }
        this.stateSignals = `slider-${this.sliderId}`;
        this.handle.min = this.min;
        this.handle.max = this.handle2.value;
        this.handle.step = this.step;
        this.handle2.min = this.handle.value;
        this.handle.max = this.max;
        this.handle2.step = this.step;
        
        this.handle.addEventListener('input', () => {
            console.log(`1 ${this.handle.value} 2 ${this.handle2.value}`);
            if (this.handle.value >= this.handle2.value) {
                console.log(">>>>");
                this.handle2.value = this.handle.value;
            }
            console.log(`1 ${this.handle.value} 2 ${this.handle2.value}`);
            let evt = new CustomEvent('slider-change', { detail: { value1: this.value }});
            this.dispatchEvent(evt);
        });
        
        this.handle2.addEventListener('input', () => {
            console.log(`1 ${this.handle.value} 2 ${this.handle2.value}`);
            if (this.handle2.value <= this.handle.value) {
                 console.log("<<<<<");
                this.handle.value = this.handle2.value;
            }
            
            let evt = new CustomEvent('slider-2-change', { detail: { value1: this.value2 }});
            this.dispatchEvent(evt);
        });
        
        /* TODO: Get encoding of emoji working 
        this.icon1 = `url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjQwIgogICBoZWlnaHQ9IjQwIgogICB2aWV3Qm94PSIwIDAgNDAgNDAiCiAgIGZpbGw9Im5vbmUiCiAgIHZlcnNpb249IjEuMSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4NDM2IiAvPgogCiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICB4PSIwIgogICAgIHk9IjAiCiAgICAgaWQ9InRleHQ5NjQ2Ij48dHNwYW4KICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICBpZD0idHNwYW45NjQ0IgogICAgICAgeD0iMCIKICAgICAgIHk9IjM2IgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZTozNnB4Ij7wn42pPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=')`;
        this.shadowRoot.styleSheets[0].insertRule(`.slider-1::-webkit-slider-thumb { background: ${this.icon1}; }`, 0);
        this.shadowRoot.styleSheets[0].insertRule(`.slider-1::-moz-range-thumb { background: ${this.icon1}; }`, 0);
       
       // this.icon2 = this.getEncodedIcon(RavelEmoji.getRandomEmoji());
        console.log(this.icon1);
        */
    }
    
    teardown() {
       // this.unsubscribe(this.observedMessages);

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name.includes('size')) {
            this.size = Number(newValue);
        }
        if (name === 'orientation') {
            this.orientation = newValue;
        }
        if (name === 'slider-id') {
            this.sliderId = newValue;
        }
        if (name === 'sliders') {
            this.sliders = parseInt(newValue, 10);
        }
        if (name === 'min') {
            this.min = Number(newValue);
        }
        if (name === 'max') {
            this.max = Number(newValue);
        }
        if (name === 'step') {
            this.step = Number(newValue);
        }
        if (name === 'value') {
            this.value = Number(newValue);
        }
        if (name === 'value-2') {
            this.value2 = Number(newValue);
        }
        if (name === 'signals') {
            this.signal = newValue.split(',');
        }
    }
    
    getEncodedIcon(emoji) {
        let svg = `
         <?xml version="1.0" encoding="UTF-8" standalone="no"?>
         <svg
            width="${this.size + 8}"
            height="${this.size + 8}"
            viewBox="0 0 ${this.size + 8} ${this.size + 8}"
            fill="none"
            version="1.1"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
           <defs
              id="defs8436" />
 
           <text
              xml:space="preserve"
              style="font-style:normal;font-weight:normal;font-size:24px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none"
              x="0"
              y="0"
              id="text9646"><tspan
                sodipodi:role="line"
                id="tspan9644"
                x="0"
                y="${this.size}"
                style="font-size:${this.size}px">${emoji}</tspan></text>
         </svg>
        `;
        return svg;
    }
}

customElements.define('ravel-slider', RavelSlider);
