export interface IController {
	init(scene: Phaser.Scene): void;
	handleInput<T>(event: T): void;
}
