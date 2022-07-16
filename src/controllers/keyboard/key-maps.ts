import { ALL_DIRECTIONS, COMMANDS, ROTATIONS } from '../../game-object';

class KeyBoardMap {
	directions: Record<string, string> = {
		w: ALL_DIRECTIONS.NORTH,
		s: ALL_DIRECTIONS.SOUTH,
		a: ALL_DIRECTIONS.WEST,
		d: ALL_DIRECTIONS.EAST,
	};
	rotation: Record<string, string> = {
		q: ROTATIONS.LEFT,
		e: ROTATIONS.RIGHT,
	};
	walk: Record<string, string> = {
		Enter: COMMANDS.WALK,
	};

	UI: Record<string, string> = {
		r: COMMANDS.REPORT,
	};
}

export default new KeyBoardMap();
