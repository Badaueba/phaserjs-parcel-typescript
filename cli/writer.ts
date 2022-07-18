import * as PubNub from 'pubnub';
import { CommandEvent } from './command';
import { v4 as uuid } from 'uuid';
const clear = require('clear');

import 'dotenv/config';

console.log(process.env.PUBLISH_KEY, process.env.SECRET_KEY);
class Writer {
	pubnub: PubNub;
	constructor() {
		this.pubnub = new PubNub({
			publishKey: process.env.PUBLISH_KEY,
			subscribeKey: String(process.env.SUBSCRIBE_KEY),
			secretKey: process.env.SECRET_KEY,
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
