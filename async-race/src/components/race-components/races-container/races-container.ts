import { BaseComponent } from '../../base-component';
import { Race } from '../race/race';
import './races-container.css';

export class RacesContainer extends BaseComponent {
  constructor() {
    super('div', ['races-container']);
  }

  addRaces(races: Race[]): void {
    races.forEach((race) => this.element.appendChild(race.element));
  }
}
