// import { deleteCar } from '../../../api';
import { BaseComponent } from '../../base-component';
import { Race } from '../race/race';
import './races-container.css';

// const DECIMAL_RADIX = 10;
// const THE_ONE = 1;
export class RacesContainer extends BaseComponent {
  constructor() {
    super('div', ['races-container']);
  }

  async addRaces(races: Promise<Race[]>[]): Promise<void> {
    races.forEach(async (race) => (await race).forEach(async (r) => this.element.appendChild(r.element)));
  }

  // removeRace(id: number): void {
  //   deleteCar(id);
  //   const parentNode = this.element;
  //   parentNode.removeChild(parentNode.childNodes[id + THE_ONE]);
  // }
}
