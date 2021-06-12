import { Button } from '../button/button';
import './engine-button.css';

export class EngineButton extends Button {
  constructor(text: string) {
    super(`${text}`, 'engine-button');
  }

  setActiveState(): void {
    this.element.classList.add('active');
  }

  disableActiveState(): void {
    this.element.classList.remove('active');
  }
}
