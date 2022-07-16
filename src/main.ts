import * as Phaser from 'phaser';
import { KeyboardController } from './controllers';
import { IController } from './controllers/interfaces';
import { LoadingScene, MainScene } from './scenes';
import { MAP } from './scenes/main-scene/map';

export const gameConfig: Phaser.Types.Core.GameConfig = {
	title: 'robot game',
	width: MAP.gameWidth,
	height: MAP.gameHeight,
	type: Phaser.AUTO,
	backgroundColor: '#24232e',
	scene: [LoadingScene, MainScene],
	scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
	},
	physics: {
		default: 'arcade',
	},
};

export class Game extends Phaser.Game {
	controller: IController;
	constructor(config: Phaser.Types.Core.GameConfig) {
		super(config);
	}
}

const mainGame = new Game(gameConfig);
export default mainGame;

const scenes = mainGame.scene.getScenes(false);

// window.addEventListener('load', () => {
// 	const game = new Game(gameConfig);
// });
