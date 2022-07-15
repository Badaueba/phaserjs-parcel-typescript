import * as Phaser from 'phaser';
import { SpriteAnimDto, SpriteDto } from './dto/sprite-dto';

export const DIRECTIONS: Record<string, string> = {
	SOUTH: 'FACING_SOUTH',
	NORTH: 'FACING_NORTH',
	WEST: 'FACING_WEST',
	EAST: 'FACING_EAST',
};

export const ANGLES = [
	'FACING_SOUTH',
	'FACING_WEST',
	'FACING_NORTH',
	'FACING_EAST',
];

export const ROTATIONS: Record<string, string> = {
	RIGHT: 'ROTATE_RIGHT',
	LEFT: 'ROTATE_LEFT',
};

export class SpriteObject extends Phaser.GameObjects.Sprite {
	spriteName: string;
	direction: string;
	angle: number;

	constructor(dto: SpriteDto) {
		super(dto.scene, dto.x, dto.y, dto.spriteName);
		this.spriteName = dto.spriteName;
		this.depth = dto.depth || 1;
		this.setFrame(dto.frame || 0);
		dto.scene.add.existing(this);
		this.direction = DIRECTIONS.SOUTH;
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
		this.flipX = this.direction === DIRECTIONS.WEST ? true : false;
	}
}
