import { BaseComponent } from '../../base-component';
import { RaceButton } from '../race-button/race-button';
import { RemoveRaceButton } from '../remove-race-button/remove-race-button';
import './race-header.css';

export class RaceHeader extends BaseComponent {
  private selectCarButton: RaceButton;

  private removeCarButton: RemoveRaceButton;

  constructor(text: string) {
    super('div', ['race-header']);
    this.selectCarButton = new RaceButton('select');
    // this.selectCarButton.element.onclick = function () {
    //   console.log('select do something');
    // };
    // this.selectCarButton.element.addEventListener('click', () => console.log('select do something'));
    this.removeCarButton = new RemoveRaceButton('remove');
    // this.removeCarButton.element.addEventListener('click', () => console.log('remove do something'));
    this.element.appendChild(this.selectCarButton.element);
    this.element.appendChild(this.removeCarButton.element);
    this.addTemplate(text);
  }

  addTemplate(text: string): void {
    this.element.innerHTML += RaceHeader.getCarName(text);
  }

  static getCarName(carName: string): string {
    return `<span>${carName}</span>`;
  }
}
