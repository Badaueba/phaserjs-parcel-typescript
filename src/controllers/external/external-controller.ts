import { IMover } from '../../actions/interfaces/mover.interface';
import { ALL_DIRECTIONS, SpriteObject } from '../../game-object';
import { IController } from '../interfaces/controller.interface';
import { ExternalInputEvent, ExternalMap } from './external-maps';
import * as PubNub from 'pubnub';
import { v4 as uuid } from 'uuid';

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
			publishKey: 'pub-c-7bf6be3d-93de-4698-8a8b-7748f9d83368',
			subscribeKey: 'sub-c-9137d9e4-e79a-4c83-860a-a6f6fd5a6070',
			secretKey: 'sec-c-NmVkNWI3OWItZDgzMy00YWY5LTg3MDItZTgzZDM2NTE2NzRk',
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
