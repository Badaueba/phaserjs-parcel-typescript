import { IMover } from '../../actions/interfaces/mover.interface';
import {
	ALL_DIRECTIONS,
	ANGLES,
	ROTATIONS,
	SpriteObject,
} from '../../game-object';
import KeyBoardMap from './key-maps';

export class KeyboardController {
	scene: Phaser.Scene;
	char: SpriteObject;
	mover: IMover;

	constructor(char: SpriteObject, mover: IMover) {
		this.char = char;
		this.mover = mover;
	}

	init(scene: Phaser.Scene) {
		scene.input.keyboard.on('keydown', this.handleInput, this);
	}

	handleInput(evt: any) {
		const event = evt as KeyboardEvent;
		const direction = KeyBoardMap.directions[event.key];
		if (direction) {
			this.char.direction = ALL_DIRECTIONS[direction];
			this.char.angle = ANGLES.indexOf(this.char.direction);
		}
		const walk = KeyBoardMap.walk[event.key];
		if (walk) this.mover.move();

		const rotation = KeyBoardMap.rotation[event.key];
		if (rotation === ROTATIONS.LEFT) this.mover.left();
		if (rotation === ROTATIONS.RIGHT) this.mover.right();

		const report = KeyBoardMap.UI[event.key];
		if (report) this.mover.report();
	}
}
