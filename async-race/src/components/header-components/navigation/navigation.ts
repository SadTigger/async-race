import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import './navigation.css';

export class Navigation extends BaseComponent {
  constructor() {
    super('div', ['navigation']);
  }

  addButtons(buttons: Button[]): void {
    buttons.forEach((button) => this.element.appendChild(button.element));
  }
}
