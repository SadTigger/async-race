import { BaseComponent } from '../../base-component';
import { RaceButton } from '../race-button/race-button';
import { RemoveRaceButton } from '../remove-race-button/remove-race-button';
import './race-header.css';

export class RaceHeader extends BaseComponent {
  private selectCarButton: RaceButton;

  private removeCarButton: RemoveRaceButton;


  constructor(text: string, id: string) {
    super('div', ['race-header']);
    this.selectCarButton = new RaceButton('select');
    this.removeCarButton = new RemoveRaceButton('remove', id);
    this.element.appendChild(this.selectCarButton.element);
    this.element.appendChild(this.removeCarButton.element);
    this.element.appendChild(RaceHeader.getCarNameElement(text));
  }

  static getCarNameElement(carName: string): HTMLElement {
    const span = document.createElement('span');
    span.innerHTML = `${carName}`;
    return span;
  }
}
