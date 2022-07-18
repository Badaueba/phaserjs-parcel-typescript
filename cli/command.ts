import { join } from 'path';
import writer from './writer';

export interface Command {
	output(value: string): void;
}

class ValidCommands {
	place: Command;
	move: Command;
	right: Command;
	left: Command;
	report: Command;
	help: Command;
}

export class CommandEvent {
	key: string;
	args?: {
		x: number;
		y: number;
		facing: string;
	};
}

const DIRECTIONS = ['SOUTH', 'NORTH', 'EAST', 'WEST'];

export const validCommands: ValidCommands = {
	place: {
		output: (value: string) => {
			const split = value.split(' ');

			let error = false;
			if (!(split.length === 4)) error = true;
			if (isNaN(Number(split[1])) || isNaN(Number(split[2])))
				error = true;
			if (!DIRECTIONS.includes(split[3])) error = true;

			if (error) console.log('INVALID PLACE ARGS');

			writer.write({
				key: 'PLACE',
				args: {
					x: +split[1],
					y: +split[2],
					facing: split[3].toLocaleUpperCase(),
				},
			});
		},
	},
	move: {
		output: (value: string) => {
			writer.write({ key: 'MOVE' });
		},
	},
	right: {
		output: (value: string) => {
			writer.write({ key: 'RIGHT' });
		},
	},
	left: {
		output: (value: string) => {
			writer.write({ key: 'LEFT' });
		},
	},
	report: {
		output: (value: string) => {
			writer.write({ key: 'REPORT' });
		},
	},
	help: {
		output: (value: string) => {
			console.log(`
                COMMANDS AVAILABLE: 
                1) PLACE X Y F 
                    (X = column on the 5x5 matrix)
                    (Y = row on the 5x5 matrix)
                    (F = facing direction for the robot (NORTH, WEST...))

                2) MOVE = Make the robot move 1 unit ahead
                3) RIGHT = rotate robot to RIGHT
                4) LEFT = rotate robot to LEFT 
                5) REPORT = print the robot current position

            `);
		},
	},
};
