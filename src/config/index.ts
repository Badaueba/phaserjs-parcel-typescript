import { LoadingScene, MainScene } from '../scenes';
import { MAP } from './levels';

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
