import { join, resolve } from 'path';

const blocPath = join(resolve('./'), '/assets/block-tiles.jpg');
const robotPath = join(resolve('./'), '/assets/robot-tiles.png');

export const MAP = {
	gameWidth: 626,
	gameHeight: 626,
	level: {
		assets: {
			'block-tiles': blocPath,
		},
		tileSizeW: 125.2,
		tileSizeH: 125.2,
		width: 5,
		height: 5,
		start: [0, 0],
		data: [
			[1, 1, 1, 1, 1],
			[1, 0, 0, 0, 1],
			[1, 0, 0, 0, 1],
			[1, 0, 0, 0, 1],
			[1, 1, 1, 1, 1],
		],
		uiState: {
			userText: '',
		},
	},
};

export const ROBOT = {
	key: 'robot',
	assets: {
		robot: robotPath,
	},
	tileSizeW: 150,
	tileSizeH: 150,
	anims: {
		south: {
			name: 'south',
			keys: [0, 1, 2, 3, 4],
		},
	},
};
