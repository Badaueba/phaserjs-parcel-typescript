import { gameConfig } from '../../config';
import { Game } from '../../main';

describe('Physics-Mover', () => {
	let mainScene: Phaser.Scene;
	let game: Phaser.Game;
	let robot: Phaser.GameObjects.GameObject;
	beforeEach(() => {
		game = new Game({ ...gameConfig, type: Phaser.HEADLESS });
		mainScene = game.scene.getScene('Main');
	});
	it('main scene should be defined', () => {
		expect(typeof mainScene).not.toBe(null);
	});
});
