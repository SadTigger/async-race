import { CarModel } from '../../../models/car-model';
import { BaseComponent } from '../../base-component';
import { CarControls } from '../../car-components/car-controls/car-controls';
import { Car } from '../../car-components/car/car';
import { RaceHeader } from '../race-header/race-header';
import './race.css';

export class Race extends BaseComponent {
  private car: Car;

  private raceHeader: RaceHeader;

  private carControls: CarControls;

  constructor({ name, color }: CarModel, id: string) {
    super('div', ['race'], [{ name: 'id', value: `race-${id}` }]);
    this.car = new Car(name, color, id);
    this.raceHeader = new RaceHeader(name, id);
    this.carControls = new CarControls();
    this.element.appendChild(this.raceHeader.element);
    this.element.appendChild(this.carControls.element);
    this.element.appendChild(this.car.element);
    this.carControls.addTemplate();
  }

  getCar(): Car {
    return this.car;
  }

  getCarImage(): string {
    return this.car.getImage();
  }

  // TODO
  // Select button, Remove button, Car Name title
  // Start engine button, Stop button, Car
  // Dotted race and finish flag

  // getCar(): void {
  //   this.element.appendChild(this.car.element);
  // }
}
