export class ExternalInputEvent {
	key: string;
	args?: {
		x: number;
		y: number;
		facing: number;
	};
}

export enum ExternalMap {
	PLACE = 'PLACE',
	MOVE = 'MOVE',
	RIGHT = 'RIGHT',
	LEFT = 'LEFT',
	REPORT = 'REPORT',
}
