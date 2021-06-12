import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import './race-controls.css';

export class RaceControls extends BaseComponent {
  constructor() {
    super('div', ['race-controls']);
  }

  addButtons(buttons: Button[]): void {
    buttons.forEach((button) => this.element.appendChild(button.element));
  }
}
