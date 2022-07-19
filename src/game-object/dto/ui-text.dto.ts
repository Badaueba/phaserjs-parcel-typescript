export class UiTextDto {
	x: number;
	y: number;
	text: string | string[];
	persistent: boolean;
	style?: {
		font: string;
		fill: string;
		tabs: number;
	};
}
