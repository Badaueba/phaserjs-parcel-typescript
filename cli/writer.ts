import * as PubNub from 'pubnub';
import { CommandEvent } from './command';
import { v4 as uuid } from 'uuid';
const clear = require('clear');

class Writer {
	pubnub: PubNub;
	constructor() {
		this.pubnub = new PubNub({
			publishKey: 'pub-c-7bf6be3d-93de-4698-8a8b-7748f9d83368',
			subscribeKey: 'sub-c-9137d9e4-e79a-4c83-860a-a6f6fd5a6070',
			secretKey: 'sec-c-NmVkNWI3OWItZDgzMy00YWY5LTg3MDItZTgzZDM2NTE2NzRk',
			uuid: uuid(),
		});

		this.pubnub.subscribe({
			channels: ['commands'],
		});
	}

	write(message: CommandEvent) {
		this.pubnub.publish(
			{
				channel: 'commands',
				message: message,
			},
			(status: PubNub.PubnubStatus) => {
				if (status.error) console.error('PUBNUB ERROR', status);
			}
		);
		clear();
	}
}

export default new Writer();
