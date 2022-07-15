export const MAP = {
	gameWidth: 626,
	gameHeight: 626,
	level: {
		assets: {
			'block-tiles': 'assets/block-tiles.jpg',
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
	},
};

export const ROBOT = {
	key: 'robot',
	assets: {
		robot: 'assets/robot-tiles.png',
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
