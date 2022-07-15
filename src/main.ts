import * as Phaser from 'phaser';
import { LoadingScene, MainScene } from './scenes';
import { MAP } from './scenes/main-scene/map';

const gameConfig: Phaser.Types.Core.GameConfig = {
	title: 'robot game',
	width: MAP.gameWidth,
	height: MAP.gameHeight,
	type: Phaser.AUTO,
	backgroundColor: '#24232e',
	scene: [LoadingScene, MainScene],
	render: { pixelArt: true, antialias: false },
	scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
	},
	physics: {
		default: 'arcade',
	},
};

export class Game extends Phaser.Game {
	constructor(config: Phaser.Types.Core.GameConfig) {
		super(config);
	}
}

const mainGame = new Game(gameConfig);
export default mainGame;

const scenes = mainGame.scene.getScenes(false);

console.log(scenes);

// window.addEventListener('load', () => {
// 	const game = new Game(gameConfig);
// });
