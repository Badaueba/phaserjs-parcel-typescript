import { MAP } from '../config/levels';
import { UiTextDto } from './dto/ui-text.dto';

export class UiText extends Phaser.GameObjects.Text {
	fading = false;
	constructor(scene: Phaser.Scene, textDto: UiTextDto) {
		super(scene, textDto.x, textDto.y, textDto.text, textDto.style);
		scene.add.existing(this);
		this.setDepth(100);
	}

	update(): void {
		if (MAP.level.uiState.userText !== '' && !this.fading) {
			this.visible = true;
			this.fading = true;
			this.setText(MAP.level.uiState.userText);
			setTimeout(() => {
				this.visible = false;
				this.fading = false;
				this.setText('');
				MAP.level.uiState.userText = '';
			}, 2000);
		}
	}
}
