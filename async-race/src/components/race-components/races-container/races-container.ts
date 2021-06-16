import { CarModel } from '../../../models/car-model';
import { GarageModel } from '../../../models/garage-model';
import { BaseComponent } from '../../base-component';
import { Race } from '../race/race';
import './races-container.css';

export class RacesContainer extends BaseComponent {
  hangar: Race[] = [];

  constructor() {
    super('div', ['races-container']);
  }

  async addRaces(garage: Promise<GarageModel>): Promise<void> {
    const promises: CarModel[] = [];
    (await garage).items.forEach((car) => promises.push(car));
    const temp: CarModel[] = await Promise.all(promises);
    temp.forEach((item, index) => {
      const raceItem = new Race(item, `${index}`);
      this.hangar.push(raceItem);
    });
    this.hangar.forEach((race) => this.element.appendChild(race.element));
  }

  getRaces(): Race[] {
    return this.hangar;
  }
}
