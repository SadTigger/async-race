import { BaseComponent } from '../base-component';
import { EngineButton } from '../engine-button/engine-button';
import './car-controls.css';

export class CarControls extends BaseComponent {
  private startEngineButton?: EngineButton;

  private stopEngineButton?: EngineButton;

  constructor() {
    super('div', ['car-controls']);
  }

  addTemplate(): void {
    this.startEngineButton = new EngineButton('A');
    this.stopEngineButton = new EngineButton('B');
    this.startEngineButton.setActiveState();
    this.element.appendChild(this.startEngineButton.element);
    this.element.appendChild(this.stopEngineButton.element);
  }
}
