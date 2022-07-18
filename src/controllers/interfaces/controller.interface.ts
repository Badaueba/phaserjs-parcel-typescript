export interface IController {
	init(scene: Phaser.Scene): void;
	handleInput(event: any): void;
}
