import { BaseComponent } from '../base-component';
import { RaceButton } from '../race-button/race-button';
import './race-header.css';

export class RaceHeader extends BaseComponent {
  private selectCarButton?: RaceButton;

  private removeCarButton?: RaceButton;

  constructor() {
    super('div', ['race-header']);
  }

  addTemplate(text: string): void {
    this.selectCarButton = new RaceButton('select');
    this.removeCarButton = new RaceButton('remove');
    this.element.appendChild(this.selectCarButton.element);
    this.element.appendChild(this.removeCarButton.element);
    this.element.innerHTML += RaceHeader.getCarName(text);
  }

  static getCarName(carName: string): string {
    return `<span>${carName}</span>`;
  }
}
