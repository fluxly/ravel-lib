export const RavelMessages = {
	
	subscriptions : {},
    
	sendMessage:  function(msg, cmd, content) {
        //
    },

	subscribe: function(msg, target) {
        console.log('subscribing ' + msg + ' ' + this.subscriptions);
        if (Object.keys(this.subscriptions).includes(msg)) {
            this.subscriptions[msg].push(target);
        } else {
            this.subscriptions[msg] = [];
            this.subscriptions[msg].push(target);
        }
        console.log('after ' + this.subscriptions);
	},
	
	unsubscribe: function(msg, target) {
		if (Object.keys(this.subscriptions).includes(msg)) {
            console.log('removing ' + msg + ' ' + this.subscriptions);
            if (this.subscriptions[msg].includes(target)) {
                this.subscriptions[msg].splice(this.subscriptions[msg].indexOf[target], 1);
            }
            console.log('after ' + this.subscriptions);
        }
	}
} 