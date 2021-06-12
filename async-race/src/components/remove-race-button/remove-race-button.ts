import { Button } from '../button/button';
import './remove-race-button.css';

export class RemoveRaceButton extends Button {
  constructor(text: string) {
    super(`${text}`, 'remove-race-button');
    // console.log('this remove race button', this);
    // this.element.onclick = this.removeHandler;
    // this.element.addEventListener('click', () => console.log('remove'));
    this.element.addEventListener('click', () => this.removeHandler);
  }

  private removeHandler(): void {
    console.log('remove car', this);
  }
}
