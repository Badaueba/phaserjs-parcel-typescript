import { Command, validCommands } from './command';
const { prompt } = require('enquirer');
const clear = require('clear');

const questions = [
	{
		type: 'input',
		name: 'command',
		message: 'TYPE A ROBOT COMMAND (HELP TO VIEW COMMANDS):',
	},
];

export function run() {
	prompt(questions).then((answers: any) => {
		clear();
		const commandString = answers.command.toLocaleLowerCase();

		const commandSplit = commandString.split(' ')[0];

		const command: Command = validCommands[commandSplit];

		if (!command) {
			console.log('COMMAND NOT FOUND!!');
		} else {
			command.output(commandString);
		}
		run();
	});
}
