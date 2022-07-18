import * as Phaser from 'phaser';
import { IController } from './controllers/interfaces';
import { gameConfig } from './config';

export class Game extends Phaser.Game {
	controller: IController;
	constructor(config: Phaser.Types.Core.GameConfig) {
		super(config);
	}
}

window.addEventListener('load', () => {
	new Game(gameConfig);
});
