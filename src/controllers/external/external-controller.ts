import { IMover } from '../../actions/interfaces/mover.interface';
import { ALL_DIRECTIONS, SpriteObject } from '../../game-object';
import { IController } from '../interfaces/controller.interface';
import { ExternalInputEvent, ExternalMap } from './external-maps';
import * as PubNub from 'pubnub';
import { v4 as uuid } from 'uuid';
import 'dotenv/config';

export class ExternalController implements IController {
	char: SpriteObject;
	mover: IMover;
	pubnub: PubNub;

	constructor(char: SpriteObject, mover: IMover) {
		this.char = char;
		this.mover = mover;
	}

	init(scece: Phaser.Scene) {
		this.pubnub = new PubNub({
			publishKey: process.env.PUBLISH_KEY,
			subscribeKey: String(process.env.SUBSCRIBE_KEY),
			secretKey: process.env.SECRET_KEY,
			uuid: uuid(),
		});

		this.pubnub.subscribe({
			channels: ['commands'],
		});

		this.pubnub.addListener({
			message: (data: Record<string, any>) => {
				this.handleInput(data.message as ExternalInputEvent);
			},
		});
	}
	handleInput(event: ExternalInputEvent): void {
		const key = ExternalMap[event.key];

		switch (key) {
			case ExternalMap.PLACE:
				this.mover.place(
					event.args.x,
					event.args.y,
					ALL_DIRECTIONS[event.args.facing]
				);
				break;
			case ExternalMap.MOVE:
				this.mover.move();
				break;
			case ExternalMap.LEFT:
				this.mover.left();
				break;
			case ExternalMap.RIGHT:
				this.mover.right();
				break;
			case ExternalMap.REPORT:
				this.mover.report();
				break;
		}
	}
}
