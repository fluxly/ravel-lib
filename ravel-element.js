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
        
    }
} 