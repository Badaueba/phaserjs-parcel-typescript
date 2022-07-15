class KeyBoardMap {
	directions: Record<string, string> = {
		w: 'NORTH',
		s: 'SOUTH',
		a: 'EAST',
		d: 'WEST',
	};
	rotation: Record<string, string> = {
		q: 'ROTATE_LEFT',
		e: 'ROTATE_RIGHT',
	};
	walk: Record<string, string> = {
		Enter: 'WALK',
	};

	UI: Record<string, string> = {
		r: 'REPORT',
	};
}

export default new KeyBoardMap();
