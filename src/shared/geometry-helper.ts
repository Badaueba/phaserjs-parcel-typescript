import * as Phaser from 'phaser';
import { MatrixPosition } from '../actions/interfaces/mover.interface';
import { MAP } from '../scenes';

export class GeometryHelper {
	public vectorToMatrix(target: Phaser.Math.Vector2): MatrixPosition {
		const col = Math.ceil(target.x / MAP.level.tileSizeW);
		const row = Math.ceil(target.y / MAP.level.tileSizeH);
		return {
			col,
			row,
		};
	}

	public matrixToVector(matrix: MatrixPosition): Phaser.Math.Vector2 {
		return new Phaser.Math.Vector2(
			matrix.col * MAP.level.tileSizeW,
			matrix.row * MAP.level.tileSizeH
		);
	}
}

export default new GeometryHelper();
