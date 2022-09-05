import  { RavelMessages }  from './RavelMessages.js';

export class RavelElement extends HTMLElement {
	
	constructor() {
		super();
	}
	
	sendMessage(msg, cmd, content) {
        //console.log('RavelMessages.sendMessage');
		RavelMessages.sendMessage(msg, cmd, content);
	}

	subscribe(msgList) {
        for (let msg of msgList) {
            RavelMessages.subscribe(msg, this);
		}
	}
	
	unsubscribe(msgList) {
		for (let msg of msgList) {
			RavelMessages.unsubscribe(msg, this);
		}
	}
    checkCommonAttributes(name, oldValue, newValue) {
        
    }
} 