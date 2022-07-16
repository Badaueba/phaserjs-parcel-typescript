import * as Phaser from 'phaser';
import { ALL_DIRECTIONS } from './definitions';
import { SpriteAnimDto, SpriteDto } from './dto/sprite-dto';

export class SpriteObject extends Phaser.GameObjects.Sprite {
	spriteName: string;
	direction: ALL_DIRECTIONS;
	angle: number;

	constructor(dto: SpriteDto) {
		super(dto.scene, dto.x, dto.y, dto.spriteName);
		this.spriteName = dto.spriteName;
		this.depth = dto.depth || 1;
		this.setFrame(dto.frame || 0);
		dto.scene.add.existing(this);
		this.direction = ALL_DIRECTIONS.SOUTH;
		this.angle = 0;
	}

	public addAnimation(dto: SpriteAnimDto) {
		return this.scene.anims.create({
			key: dto.key,
			frames: this.scene.anims.generateFrameNames(this.spriteName, {
				start: dto.startFrame,
				end: dto.endFrame,
			}),
			frameRate: dto.frameRate,
			repeat: dto.repeat,
		});
	}

	public adjustFlip() {
		this.flipX = this.direction === ALL_DIRECTIONS.EAST ? true : false;
	}
}
