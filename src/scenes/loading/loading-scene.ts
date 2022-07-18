import * as Phaser from 'phaser';
import { Types } from 'phaser';
import { MAP, ROBOT } from '../../config/levels';

export class LoadingScene extends Phaser.Scene {
	private loadingBar: Phaser.GameObjects.Graphics;
	private progressBar: Phaser.GameObjects.Graphics;

	constructor() {
		super({
			key: 'Loading',
		});
	}

	preload(): void {
		this.load.on('complete', () => this.scene.start('Main'), this);

		this.loadSpriteSheet(
			this,
			'block-tiles',
			MAP.level.assets['block-tiles'],
			{
				frameWidth: MAP.level.tileSizeW,
				frameHeight: MAP.level.tileSizeH,
				margin: 1,
			}
		);

		this.loadSpriteSheet(this, ROBOT.key, ROBOT.assets.robot, {
			frameWidth: ROBOT.tileSizeW,
			frameHeight: ROBOT.tileSizeH,
		});
	}

	loadImage(scene: Phaser.Scene, key: string, url: string) {
		return scene.load.image({
			key,
			url,
		});
	}

	loadSpriteSheet(
		scene: Phaser.Scene,
		key: string,
		url: string,
		frameConfig?: Types.Loader.FileTypes.ImageFrameConfig
	) {
		return scene.load.spritesheet({
			key,
			url,
			frameConfig,
		});
	}
}
