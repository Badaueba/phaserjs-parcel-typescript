import * as Phaser from 'phaser';
import { IMover } from '../../actions/interfaces/mover.interface';
import { PhysicsMover } from '../../actions/physics-mover/physics-mover';
import { KeyboardController } from '../../controllers';

import { IController } from '../../controllers/interfaces';
import { DIRECTIONS, SpriteObject } from '../../game-object';
import { MAP, ROBOT } from './map';

export class MainScene extends Phaser.Scene {
	private level = MAP.level;
	private gameCharacters: SpriteObject[] = [];
	private environments: SpriteObject[] = [];
	private controller: IController;
	private mover: IMover;
	robot: SpriteObject;

	constructor() {
		super({ key: 'Main' });
	}

	preload() {}

	create() {
		this.setupRoom();
		this.setupPlayer();
	}

	setupPlayer() {
		const initX = MAP.gameWidth / 2;
		const initY = MAP.gameHeight / 2;

		this.robot = new SpriteObject({
			scene: this,
			x: initX,
			y: initY,
			spriteName: ROBOT.key,
			frame: 0,
			depth: 20,
		});

		this.robot.setOrigin(0, 0);

		this.robot.addAnimation({
			scene: this,
			key: DIRECTIONS.SOUTH,
			startFrame: 0,
			endFrame: 4,
			frameRate: 10,
			repeat: -1,
		});

		this.robot.addAnimation({
			scene: this,
			key: DIRECTIONS.NORTH,
			startFrame: 36,
			endFrame: 40,
			frameRate: 10,
			repeat: -1,
		});

		this.robot.addAnimation({
			scene: this,
			key: DIRECTIONS.EAST,
			startFrame: 9,
			endFrame: 13,
			frameRate: 10,
			repeat: -1,
		});

		this.robot.addAnimation({
			scene: this,
			key: DIRECTIONS.WEST,
			startFrame: 9,
			endFrame: 13,
			frameRate: 10,
			repeat: -1,
		});

		this.physics.add.existing(this.robot);

		this.mover = new PhysicsMover(this, this.robot);
		this.controller = new KeyboardController(this, this.robot, this.mover);
		this.mover.place(0, 0, DIRECTIONS.EAST);
	}

	setupRoom() {
		for (let row = 0; row < this.level.height; row++) {
			for (let col = 0; col < this.level.height; col++) {
				const bloc = new SpriteObject({
					scene: this,
					x: col * this.level.tileSizeW,
					y: row * this.level.tileSizeH,
					spriteName: 'block-tiles',
					frame: 5,
					depth: 1,
				});
				bloc.setOrigin(0, 0);
			}
		}
	}

	update(time: number, delta: number): void {
		this.robot.play(this.robot.direction, true);
		this.robot.adjustFlip();
	}
}
