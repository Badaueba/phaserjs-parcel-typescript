import * as Phaser from 'phaser';
import { IMover } from '../../actions/interfaces/mover.interface';
import { PhysicsMover } from '../../actions/physics-mover/physics-mover';
import { ExternalController, KeyboardController } from '../../controllers';

import { IController } from '../../controllers/interfaces';
import { ALL_DIRECTIONS, SpriteObject, UiText } from '../../game-object';
import { MAP, ROBOT } from '../../config/levels';

export class MainScene extends Phaser.Scene {
	private level = MAP.level;
	private gameCharacters: SpriteObject[] = [];
	private keyboardController: IController;
	private externalController: IController;
	private mover: IMover;
	private uiText: UiText;
	robot: SpriteObject;

	constructor() {
		super({ key: 'Main' });
	}

	create() {
		this.setupRoom();
		this.setupPlayer();
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

	setupPlayer() {
		this.robot = new SpriteObject({
			scene: this,
			x: 0,
			y: 0,
			spriteName: ROBOT.key,
			frame: 0,
			depth: 20,
		});

		this.robot.setOrigin(0.09, 0);

		this.robot.addAnimation({
			scene: this,
			key: ALL_DIRECTIONS.SOUTH,
			startFrame: 0,
			endFrame: 4,
			frameRate: 10,
			repeat: -1,
		});

		this.robot.addAnimation({
			scene: this,
			key: ALL_DIRECTIONS.NORTH,
			startFrame: 36,
			endFrame: 40,
			frameRate: 10,
			repeat: -1,
		});

		this.robot.addAnimation({
			scene: this,
			key: ALL_DIRECTIONS.WEST,
			startFrame: 9,
			endFrame: 13,
			frameRate: 10,
			repeat: -1,
		});

		this.robot.addAnimation({
			scene: this,
			key: ALL_DIRECTIONS.EAST,
			startFrame: 9,
			endFrame: 13,
			frameRate: 10,
			repeat: -1,
		});

		this.physics.add.existing(this.robot);
		this.gameCharacters.push(this.robot);

		this.mover = new PhysicsMover(this, this.robot);
		this.keyboardController = new KeyboardController(
			this.robot,
			this.mover
		);
		this.externalController = new ExternalController(
			this.robot,
			this.mover
		);
		this.keyboardController.init(this);
		this.externalController.init(this);
		this.mover.place(0, 0, ALL_DIRECTIONS.SOUTH);

		this.uiText = new UiText(this, {
			x: 50,
			y: 580,
			text: MAP.level.uiState.userText,
			persistent: false,
			style: {
				font: '25px Arial Black',
				fill: '#000',
				tabs: 20,
			},
		});
	}

	update(time: number, delta: number): void {
		this.robot.play(this.robot.direction, true);
		this.robot.adjustFlip();
		this.uiText.update();
	}
}
