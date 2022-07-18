import { MAP } from '../../config/levels';
import { ALL_DIRECTIONS, ANGLES, SpriteObject } from '../../game-object';

import geometryHelper from '../../shared/geometry-helper';
import { MatrixPosition } from '../interfaces/mover.interface';

export class PhysicsMover {
	target = new Phaser.Math.Vector2();
	char: SpriteObject;
	moving: boolean;
	direction: string;

	constructor(private scene: Phaser.Scene, char: SpriteObject) {
		this.char = char;
		this.target = new Phaser.Math.Vector2(this.char.x, this.char.y);
	}

	place(col: number, row: number, facing: ALL_DIRECTIONS) {
		const matrix: MatrixPosition = { col, row };

		this.char.direction = facing;

		this.char.angle = ANGLES.indexOf(facing);

		const nextPosition = geometryHelper.matrixToVector(matrix);

		this.char.x = nextPosition.x;
		this.char.y = nextPosition.y;
	}

	move() {
		const matrix = geometryHelper.vectorToMatrix(
			new Phaser.Math.Vector2(this.char.x, this.char.y)
		);

		switch (this.char.direction) {
			case ALL_DIRECTIONS.NORTH:
				matrix.row -= 1;
				break;
			case ALL_DIRECTIONS.SOUTH:
				matrix.row += 1;
				break;

			case ALL_DIRECTIONS.EAST:
				matrix.col += 1;
				break;

			case ALL_DIRECTIONS.WEST:
				matrix.col -= 1;
				break;
		}

		if (matrix.row < 0 || matrix.row > MAP.level.height - 1) return;
		if (matrix.col < 0 || matrix.col > MAP.level.width - 1) return;

		this.place(matrix.col, matrix.row, ALL_DIRECTIONS[this.char.direction]);
	}

	right(): void {
		let angle = this.char.angle - 1;
		if (angle < 0) angle = 3;
		this.char.angle = angle;
		this.char.direction = ANGLES[angle];
	}
	left(): void {
		let angle = this.char.angle + 1;
		if (angle > 3) angle = 0;
		this.char.angle = angle;
		this.char.direction = ANGLES[angle];
	}

	report(): void {
		const matrix = geometryHelper.vectorToMatrix(
			new Phaser.Math.Vector2(this.char.x, this.char.y)
		);
		console.log(`${matrix.col}, ${matrix.row}, ${this.char.direction}`);
	}
}
