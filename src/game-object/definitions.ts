export type KEY_DIRECTION = 'SOUTH' | 'NORTH' | 'WEST' | 'EAST';

export enum ALL_DIRECTIONS {
	SOUTH = 'SOUTH',
	WEST = 'WEST',
	NORTH = 'NORTH',
	EAST = 'EAST',
}

export const ANGLES = [
	ALL_DIRECTIONS.SOUTH,
	ALL_DIRECTIONS.EAST,
	ALL_DIRECTIONS.NORTH,
	ALL_DIRECTIONS.WEST,
];

export enum ROTATIONS {
	RIGHT = 'ROTATE_RIGHT',
	LEFT = 'ROTATE_LEFT',
}

export enum COMMANDS {
	WALK = 'WALK',
	REPORT = 'REPORT',
}
