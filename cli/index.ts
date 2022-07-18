require('@geckos.io/phaser-on-nodejs');
require('canvas');

import * as Phaser from 'phaser';
import { gameConfig } from '../src/config';
import { run } from './inquirer-prompt';

window.addEventListener('load', () => {
	new Phaser.Game({
		...gameConfig,
		type: Phaser.HEADLESS,
		customEnvironment: true,
	});
});

run();
