import { IController } from '../interfaces/controller.interface';

export class ExternalController implements IController {
	handleInput<T>(event: T): void {}
}
