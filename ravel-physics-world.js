import { RavelElement } from './ravel-element.js';
import { ravelLibPath } from './ravel-lib-path.js';
import globalStyles from './global-styles.js';

export default class RavelPhysicsWorld extends RavelElement {
    static get localStyles() {
        return `
        <style>
        #container {
            width: 100%;
            height: 100%;
        }
        </style>
        `;
    }
  
    static get html() { 
        return `
        <div id="container">
        <slot></slot>
        </div>
        `;
    }
 
    static get observedAttributes() { 
        return ['attribute'];
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
    }
  
    setup() {
        this.pixelsToWorld = 30.0;
        this world = null;
        this.grabbedIndex = -1;
        this.playfieldMembers = [];
        this.boundaries = [];
        world = new b2World(new b2Vec2(0, 0), true);
        this.initWorld();
        
        this.observedMessages = ['message'];
        //this.subscribe(this.observedMessages);   
    }
    
    initWorld() {
    	let fixDef = new b2FixtureDef;
    	fixDef.density = 1.0;
    	fixDef.restitution = 1.0;
    	fixDef.friction = 1.0;

        //for (i = 0; i < nFluxum; i++) {
        //	fluxum.push(new Fluxum(world, i, Math.random() * width - FLUXUM_W/2, Math.random() * height - FLUXUM_W/2, FLUXUM_W/2, FLUXUM_W/2, 10, 0));
        //}
	
    	boundaries.push(new Boundary(world, 0, -8, 750, 10));  // top
    	boundaries.push(new Boundary(world, 750 + 8, 0, 10, 500));  // right
    	boundaries.push(new Boundary(world, 0, 500 + 8, 750, 10));  // bottom
    	boundaries.push(new Boundary(world, -8, 0, 10, 500));  // left
    	this.listener = new Box2D.Dynamics.b2ContactListener;       
    
        this.listener.BeginContact = function(contact){
        	console.log("contact!");
        }
        world.SetContactListener(this.listener);
        
        setInterval( () => {
        		for (let j = 0; j < this.playfieldMembers.length; j++){
        			this.playfieldMembers[j].update();
        		}
        	},
        	50
        );
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

customElements.define('ravel-physics-world', RavelPhysicsWorld);

class Boundary {
  constructor(world, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    let fd = new box2d.b2FixtureDef();
    fd.density = 1.0;
    fd.friction = 0.5;
    fd.restitution = 0.2;

    let bd = new box2d.b2BodyDef();

    bd.type = box2d.b2BodyType.b2_staticBody;
    bd.position.x = scaleToWorld(this.x);
    bd.position.y = scaleToWorld(this.y);
    fd.shape = new box2d.b2PolygonShape();
    fd.shape.SetAsBox(this.w / (scaleFactor * 2), this.h / (scaleFactor * 2));
    this.body = world.CreateBody(bd).CreateFixture(fd);
  }
}