import { SpriteObject } from '../../game-object';

export interface IMover {
	char: SpriteObject;
	moving: boolean;

	place(x: number, y: number, facing: string): void;
	move(): void;
	left(): void;
	right(): void;
	report(): string;
}

export class MatrixPosition {
	col: number;
	row: number;
}
