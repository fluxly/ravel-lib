//import  { RavelMesseges }  from "../RavelMesseges.js"

export class RavelElement extends HTMLElement {
	
	constructor() {
		super();
	}
	
	sendMessage(msg, cmd, content) {
		//UnrulyMesseges.sendMessage(msg, cmd, content);
	}

	subscribe(msgList) {
        for (let msg of msgList) {
            //UnrulyMesseges.subscribe(msg, this);
		}
	}
	
	unsubscribe(msgList) {
		for (let msg of msgList) {
			//UnrulyMesseges.unsubscribe(msg, this);
		}
	}
    checkCommonAttributes(name, oldValue, newValue) {
        if (name.includes('size')) {
            this.size = Number(newValue);
        }
        if (name === 'x') {
            this.container.style.position = 'fixed';
            this.x = newValue;
            this.container.style.left = newValue;
        }
        if (name === 'y') {
            this.container.style.position = 'fixed';
            this.y = newValue;
            this.container.style.top = newValue;
        }
        if (name === 'orientation') {
            this.orientation = newValue;
        }
    }
} 