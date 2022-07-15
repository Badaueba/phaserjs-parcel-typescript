import { IMover } from '../../actions/interfaces/mover.interface';
import { ANGLES, DIRECTIONS, ROTATIONS, SpriteObject } from '../../game-object';
import KeyBoardMap from './key-maps';

export class KeyboardController {
	char: SpriteObject;
	mover: IMover;

	constructor(
		private scene: Phaser.Scene,
		char: SpriteObject,
		mover: IMover
	) {
		this.char = char;
		this.mover = mover;
		scene.input.keyboard.on(
			'keydown',
			this.handleInput<KeyboardEvent>,
			this
		);
	}

	handleInput<T>(evt: any) {
		const event = evt as KeyboardEvent;
		const direction = KeyBoardMap.directions[event.key];
		if (direction) {
			console.log(direction);
			this.char.direction = DIRECTIONS[direction];
			this.char.angle = ANGLES.indexOf(this.char.direction);
		}
		const walk = KeyBoardMap.walk[event.key];
		if (walk) this.mover.move();

		const rotation = KeyBoardMap.rotation[event.key];
		console.log(rotation);
		if (rotation === ROTATIONS.LEFT) this.mover.left();
		if (rotation === ROTATIONS.RIGHT) this.mover.right();

		const report = KeyBoardMap.UI[event.key];
		if (report) this.mover.report();

		console.log(this.char.angle);
	}
}
