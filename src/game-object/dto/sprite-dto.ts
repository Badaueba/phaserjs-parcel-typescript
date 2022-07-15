export class SpriteDto {
	scene: Phaser.Scene;
	x: number;
	y: number;
	spriteName: string;
	frame?: number;
	depth?: number;
}

export class SpriteAnimDto {
	scene: Phaser.Scene;
	key: string;
	startFrame: number;
	endFrame: number;
	frameRate?: number;
	repeat?: number;
}
